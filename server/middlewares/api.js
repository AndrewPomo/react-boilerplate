const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const mongoose = require('mongoose');
const stringSchema = new mongoose.Schema({
  string: String,
});

mongoose.connect('mongodb://@localhost:27017/strings');
const db = mongoose.connection;
db.on('connected', () => console.log('Mongo connected'));

const SubmittedString = mongoose.model('String', stringSchema);

router.post('/', (req, res) => {
  const string = new SubmittedString({ string: req.body.string });
  string.save(err => {
    if (err) {
      console.log(err);
    } else {
      console.log('String saved');
      res.json({ ok: true });
    }
  });
});

router.get('/', (req, res) => {
  String.find((err, strings) => {
    if (err) {
      console.log(err);
    } else {
      console.log(strings);
      res.json(strings);
    }
  });
});

module.exports = router;
