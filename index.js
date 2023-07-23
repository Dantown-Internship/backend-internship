const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

const getCoinPrices = async (coin) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`);
      return response.data[coin.toLowerCase()].usd;
    } catch (error) {
      throw new Error('Error fetching coin prices');
    }
  };

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });