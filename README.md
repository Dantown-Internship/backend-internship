# Swaply Backend Application

Swaply is a Node.js backend application that fetches real-time cryptocurrency prices in USD from a service provider (e.g., Coingecko, Binance) and provides various APIs to access these prices and perform conversions between different cryptocurrencies.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Requirements

- Node.js (>=12.x)
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/uzo-felix/backend-internship.git
cd backend-internship
```

2. Install the dependencies:

```bash
npm install
```

## Usage

To start the Swaply backend application, run the following command:

```bash
npm start
```

By default, the application will be available at `http://localhost:3000`. You can change the port in the `app.js` file if needed.

## API Endpoints

The Swaply backend provides the following API endpoints:

1. **Get Coin Prices**

   Retrieve the real-time price of a specific cryptocurrency in USD.

   - **Endpoint:** `GET /coin/:name/price`
   - **Example:** `GET http://localhost:3000/coin/bitcoin/price`

2. **Convert Coin Amount to USD**

   Convert a specific amount of a cryptocurrency to its equivalent value in USD.

   - **Endpoint:** `POST /coin/convert`
   - **Example:** `POST http://localhost:3000/coin/convert`

   ```json
   // Request Body
   {
     "coin": "ethereum",
     "amount": 5
   }
   ```

3. **Convert from One Coin to Another**

   Convert a specific amount of one cryptocurrency to its equivalent value in another cryptocurrency.

   - **Endpoint:** `POST /coin/convert/:from/:to`
   - **Example:** `POST http://localhost:3000/coin/convert/bitcoin/ethereum`

   ```json
   // Request Body
   {
     "amount": 0.1
   }
   ```

## Testing
