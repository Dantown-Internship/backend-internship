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

app.post('/coin/convert', async (req, res) => {
    const { coin, amount } = req.body;
    try {
      const price = await getCoinPrices(coin);
      const usdEquivalent = price * amount;
      res.json({ coin, amount, usdEquivalent });
    } catch (error) {
      res.status(500).json({ error: 'Error converting coin to USD' });
    }
  });

  app.post('/coin/convert/:from/:to', async (req, res) => {
    const { from, to } = req.params;
    const { amount } = req.body;
  
    try {
      const fromPrice = await getCoinPrices(from);
      const toPrice = await getCoinPrices(to);
      const convertedAmount = (amount * fromPrice) / toPrice;
      res.json({ from, to, amount, convertedAmount });
    } catch (error) {
      res.status(500).json({ error: 'Error converting coins' });
    }
  });

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });