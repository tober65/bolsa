import axios from "axios";
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("api/signup", {username: username, email: email, password: password});
  },
  // Adds a user's stocks to the database
  addStocks: (username, symbol, amount) => {
    return axios.post(`/api/userstocks/${username}/${symbol}/${amount}`);
  },
  // Gets the user's stocks from the database
  getUserStocks: (username) => {
    return axios.get(`/api/userstocks/${username}`);
  },
  getStockBySymbol: (symbol) => {
    return axios.get(`/api/stocks/${symbol}`);
  },
  getAllSymbols: () => {
    return axios.get(`/api/stocks/`);
  },
  getCompanyInfo: (symbol) => {
    return axios.get(`/api/company/${symbol}`);
  },
  getNews: (symbol) => {
    return axios.get(`/api/stocksnews/${symbol}`);
  },
};
