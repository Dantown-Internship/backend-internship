const express = require('express');
const axios = require('axios');
const coinRoutes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use('/coin', coinRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });