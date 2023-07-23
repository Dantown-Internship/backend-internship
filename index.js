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

  app.get('/coin/:name/price', async (req, res) => {
    const coin = req.params.name;
    try {
      const price = await getCoinPrices(coin);
      res.json({ coin, price });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching coin price' });
    }
  });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });