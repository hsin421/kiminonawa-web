'use strict';

//Import dependency
var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
  organization: String,
  organizationEmail: String,
  situation: String,
  userName: String,
  userEmail: String,
  imgUrl: {type: String, default: 'http://www.ucarecdn.com/85d7241a-2aba-4c2b-940f-ac13b2949294/angrytextemoticonlargec42270.png'},
  url: {type: String, default: ''},
  status: { type: String, default: 'init'},
  date: { type: Date, default: Date.now }
});

//Export our module to use in server.js
module.exports = mongoose.model('Topic', TopicSchema);