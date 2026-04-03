import axios from "axios";

const API = axios.create({
  baseURL: "https://api.liteapi.travel/v3.0",
  headers: {
    "X-API-Key": "sand_087c093c-33d7-4fe0-aab3-b946a2c014c7", // replace this
  },
});

export const getHotelsByCountry = async (countryCode) => {
  const res = await API.get(`/data/hotels?countryCode=${countryCode}`);
  return res.data.data; // adjust if response differs
};

export const getHotelById = async (hotelId) => {
  try {
    const res = await API.get(`/data/hotel?hotelId=${hotelId}`);
    return res.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};