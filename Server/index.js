const express = require('express');
const connectDB = require('./db');

const app = express();
const port = 7000;
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//
app.use('/api', require("./Routes/createUser"))


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
