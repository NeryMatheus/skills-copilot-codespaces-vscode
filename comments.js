// Create web server
// 1 - Import express
const express = require('express');
// 2 - Create express server
const app = express();
// 3 - Create a port
const port = 3000;
// 4 - Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// 5 - Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// 6 - Create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is a route for comments');
});
// 7 - Create a route for comments with a parameter
app.get('/comments/:id', (req, res) => {
  res.send(`This is a route for comment with id ${req.params.id}`);
});
// 8 - Create a route for comments with a query parameter
app.get('/comments', (req, res) => {
  res.send(`This is a route for comments with query parameter ${req.query.sort}`);
});
// 9 - Create a route for comments with a query parameter and a parameter
app.get('/comments/:id', (req, res) => {
  res.send(`This is a route for comment with id ${req.params.id} and query parameter ${req.query.sort}`);
});