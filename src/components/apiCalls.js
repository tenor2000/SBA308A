import axios from "axios";

// Normally, this will be in the backend to protect the API_KEY.
const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.stockdata.org/v1";

export async function getCurrentStockPrices(...symbols) {
  // getting multiple stock prices is 1 call.
  const tickers = symbols.join(",");
  console.log("API called");
  try {
    const response = await axios.get(
      baseUrl + `/data/quote?symbols=${tickers}&api_token=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}

export async function getEndOfDayStockPrices(symbol) {
  console.log("API called");
  try {
    const response = await axios.get(
      baseUrl + `/data/eod?symbols=${symbol}&api_token=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}

export async function getStockNews(symbol) {
  console.log("API called");
  try {
    const response = await axios.get(
      baseUrl + `/news/all?symbols=${symbol}&api_token=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}
