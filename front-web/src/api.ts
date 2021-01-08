import axios from "axios";

const API_URL = "https://mn-dsdelivery.herokuapp.com";

export function fetchProducts() {
  return axios(`${API_URL}/products`);
}
