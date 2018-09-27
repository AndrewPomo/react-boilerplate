const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());

const mongoose = require('mongoose');
const stringSchema = new mongoose.Schema({
  text: String,
});
/* eslint-disable array-callback-return */
mongoose.connect('mongodb://@localhost:27017/strings');
// const db = mongoose.connection;
// db.on('connected', () => console.log('Mongo connected'));

const SubmittedString = mongoose.model('String', stringSchema);

router.post('/', (req, res) => {
  const string = new SubmittedString({ text: req.body.string });
  string.save(err => {
    if (err) {
      // console.log(err);
    } else {
      // console.log('String saved');
      res.json({ ok: true });
    }
  });
});

router.get('/', (req, res) => {
  SubmittedString.find((err, strings) => {
    if (err) {
      // console.log(err);
    } else {
      res.json(strings);
    }
  });
});

module.exports = router;
