import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env);

// Normally, this will be in the backend to protect the API_KEY.
const API_KEY = process.env.API_KEY;
const baseUrl = "https://api.stockdata.org/v1/data";

export async function getCurrentStockPrices(...symbols) {
  const tickers = symbols.join(",");

  try {
    const response = await axios.get(
      baseUrl + `/quote?symbols=${tickers}&api_token=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}

// console.log(getCurrentStockPrices("AAPL", "TSLA", "V"));

export async function getEndOfDayStockPrices(symbol) {
  try {
    const response = await axios.get(
      baseUrl + `/eod?symbols=${symbol}&api_token=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}

export async function getStockNews(symbol) {
  try {
    const response = await axios.get(baseUrl + `/${symbol}`);
    return response;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}
