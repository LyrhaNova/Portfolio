const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3030;

const corsOptions = {
  origin: 'https://portfolio-back-office.vercel.app',
  optionsSuccessStatus: 200,
};

app.use(cors());
app.use(compression());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB,
  })
  .catch((err) => {
    console.log('Erreur de connexion à MongoDB', err);
  });

const database = mongoose.connection;
database.on('error', (err) => {
  console.log('Erreur de connexion à MongoDB', err);
});
database.once('connected', () => {
  console.log('Connecté à MongoDB');
});

app.use('/api/users', require('./src/routes/users.routes'));
app.use('/api/projects', require('./src/routes/projects.routes'));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log('Serveur démarré sur le port :', port);
});

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv').config();
// const mongoose = require('mongoose');

// const app = express();
// const port = process.env.PORT || 3030;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

// mongoose
//   .connect(process.env.MONGODB_URI, {
//     dbName: process.env.MONGODB_DB,
//   })
//   .catch((err) => {
//     console.log('Error connecting to MongoDB', err);
//   });

// const database = mongoose.connection;

// database.on('error', (err) => {
//   console.log('Error connecting to MongoDB', err);
// });

// database.once('connected', () => {
//   console.log('Connected to MongoDB');
// });

// // Routes
// app.use('/api/users', require('./src/routes/users.routes'));

// app.listen(port, () => {
//   console.log('Server started on port : ', port);
// });
