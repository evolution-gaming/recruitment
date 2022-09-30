const express = require('express');
const path = require('path');

const port = 3000;
const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, "../public")));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/spin', (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const result = {};
  res.send(JSON.stringify(result));
});

app.use('/', router);
app.listen(port);

console.log(`Listening on port ${port}`);
