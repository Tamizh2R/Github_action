const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let todos = [];

app.post('/todos', (req, res) => {
  todos.push(req.body);
  res.status(201).send(req.body);
});

app.get('/todos', (req, res) => {
  res.send(todos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
