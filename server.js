'use strict'

//Import dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Topic = require('./model/topics');

//Create instances
var app = express();
var router = express.Router();

//Set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//DB config
mongoose.connect('mongodb://localhost/kiminonawa-api')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

//Configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove cacheing so we get the most recent topics
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//Set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//Add the /topics route to our /api router
router.route('/topics')
  //Retrieve all topics from the database
  .get(function(req, res) {
    //Looks at our Topic Schema
    Topic.find(function(err, topics) {
      if (err)
        res.send(err);
      //Responds with a json object of our database topics.
      res.json(topics)
    });
  })
  //Post new topic to the database
  .post(function(req, res) {
    var topic = new Topic();
    (req.body.author) ? topic.author = req.body.author : null;
    (req.body.text) ? topic.text = req.body.text : null;

    topic.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Topic successfully added!' });
    });
  });

//Add a route to a specific topic based on the database ID
router.route('/topics/:topic_id')
//The put method gives us the chance to update our topic based on the ID passed to the route
  .put(function(req, res) {
    Topic.findById(req.params.topic_id, function(err, topic) {
      if (err)
        res.send(err);
      //Set the new author and text to whatever was changed. If nothing was changed
      //We will not alter the field.
      (req.body.author) ? topic.author = req.body.author : null;
      (req.body.text) ? topic.text = req.body.text : null;
      //Save topic
      topic.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Topic has been updated' });
      });
    });
  })
  //Delete method for removing a topic from our database
  .delete(function(req, res) {
    //Selects the topic by its ID, then removes it.
    Topic.remove({ _id: req.params.topic_id }, function(err, topic) {
      if (err)
        res.send(err);
      res.json({ message: 'Topic has been deleted' })
    })
  });

//Use our router configuration when we call /api
app.use('/api', router);

//Starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
