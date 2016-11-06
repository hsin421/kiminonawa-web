var express = require('express');
var router = express.Router();

var Topic = require('../models/Topic.js');

/* GET /topics listing. */
router.get('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  Topic.find(function (err, topics) {
    if (!err) {
      res.json(topics);  
    } else {
      console.log('Error in first query');
      return next(err);
    }
  });
});

/* GET /topics/id */
router.get('/:id', function(req, res, next) {
  Topic.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /topics */
router.post('/', function(req, res, next) {
  Topic.create(req.body, function (err) {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    res.status(200).send('Added successfully');
  });
});

/* PUT /topics/:id */
router.put('/:id', function(req, res, next) {
  var query = { id: req.body.id };
  var isIncrement = req.body.isIncrement;
  var isFull = req.body.isFull;
  var omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  var data = _.omit(req.body, omitKeys);

  if(isFull) {
    Topic.findOneAndUpdate(query, data, function(err, data) {
      if(err) {
        console.log('Error on save!');
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  } else {
    Topic.findOneAndUpdate(query, { $inc: { count: isIncrement ? 1: -1 } }, function(err, data) {
      if(err) {
        console.log('Error on save!');
        // Not sure if server status is the correct status to return
        res.status(500).send('We failed to save to due some reason');
      }
      res.status(200).send('Updated successfully');
    });
  }

});

/* DELETE /topics/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.status(200).send('Removed Successfully');
  });
});

module.exports = router;
