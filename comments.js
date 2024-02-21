// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server
// node comments.js
// Visit http://localhost:3000/comments in your browser

// Path: index.js
// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/', (req, res) => {
  res.send('This is the home page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server
// node index.js
// Visit http://localhost:3000 in your browser

// Path: about.js
// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/about', (req, res) => {
  res.send('This is the about page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server
// node about.js
// Visit http://localhost:3000/about in your browser

// Path: contact.js
// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/contact', (req, res) => {
  res.send('This is the contact page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server
// node contact.js
// Visit http://localhost:3000/contact in your browser

// Path: server.js
// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/contact', (req, res)