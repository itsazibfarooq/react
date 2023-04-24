// all imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Messages = require('./dbMessages');
const Pusher = require('pusher');
const cors = require('cors');

// app configurations
dotenv.config();
const port = process.env.PORT || 2000;
const app = express();

const pusher = new Pusher({
  appId: "1588626",
  key: "4f2c4783f59306b9cd5c",
  secret: "3782502a1502d88c42f9",
  cluster: "ap2",
  useTLS: true
});


// middleware
app.use(express.json());
app.use(cors());


// DB configuration
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Db connected');

  const msgCollection = db.collection('message-contents');
  const changeStream = msgCollection.watch();

  changeStream.on('change', (change) => {
    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument;
      pusher.trigger('messages', 'inserted', messageDetails);
    }
    else {
      console.log('Error triggering pusher');
    }
  });
});

// api routes
app.post('/messages/new', async (req, res) => {
  const dbMessage = req.body;
  try {
    const msg = await Messages.create(dbMessage);
    res.status(201).json(msg);
  }
  catch (error) {
    res.status(500).send(`Something bad happened`);
  }
});

app.get('/messages/sync', async (req, res) => {
  try {
    const allMessages = await Messages.find();
    res.status(200).json(allMessages);
  }
  catch (error) {
    res.status(500).send(`Something bad happened`);
  }
});

// listener
app.listen(port, () => {
  console.log(`Running at port: ${port}`)
});