const express = require('express');
const app = express();

const users = [
  { name: 'Alice' },
  { name: 'Bob' },
];

app.get('/users', (req, res) => {
  res.json(users.map(u => u.name));
});

app.listen(3000, () => console.log('Server running'));
