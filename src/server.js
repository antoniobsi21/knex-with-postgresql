const express = require('express');
const app = express();

require('dotenv/config');

app.get('/', (req, res) => {
  res.send('Welcome');
});

const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT, HOST, () => console.log(`Server is running on http://${HOST}:${PORT}`));