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
  //get all symbols
  //TODO: allow exchange changes
  getStockSymbols: () => {
    return axios.get(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bsq5rugfkcbcavsjc2vg",
      {headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Content-Type': 'application/x-www-form-urlencoded',
      }},
    );
  }
};
