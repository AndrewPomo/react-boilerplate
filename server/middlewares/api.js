const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stringSchema = new Schema({
  id: Number,
  string: 'string',
});

mongoose.connect('mongodb://@localhost:27017/strings');
const db = mongoose.connection;
db.on('connected', () => console.log('Mongo connected'));

const String = mongoose.model('String', stringSchema);

router.post('/', (req, res) => {
  const string = new String({string: req.body.string});
  
  string.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('String saved');
      res.end();
    }
  });
});

router.get('/', (req, res) => {
  
  String.find(function (err, strings) {
    if (err) {
      console.log(err);
    } else {
      console.log(strings);
      res.json(strings);
    }
  })
});

module.exports = router;