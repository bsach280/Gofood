const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

const app = express();
const port = 7000;

// Middleware to enable CORS
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//
app.use('/api', require("./Routes/createUser"))
app.use('/api', require("./Routes/login"))
app.use('/api', require("./Routes/DisplayData"))






app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
