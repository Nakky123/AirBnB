import { create } from "zustand";
import axios from "axios";

export const useMyStore = create((set) => ({
  apiKey: "b55ebdc22b904e591303fa9ae71ebea6",
  nameInput: "",
  setName: (name) =>
    set(() => ({
      nameInput: name,
    })),
  count: 0,
  setCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  setDicrease: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  data: [],
  setData: (data) =>
    set((state) => ({
      data: data,
    })),
  fetchData: () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => useMyStore.getState().setData(response.data));
  },
  weatherData: [],
  setWeatherData: (weatherData) =>
    set((state) => ({
      weatherData: weatherData,
    })),
  fetchWeatherData: async () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Phnom Penh&appid=${
          useMyStore.getState().apiKey
        }`
      )
      .then((response) =>
        useMyStore.getState().setWeatherData(response.data.list)
      );
  },
  airBnB: [],
  setAirBnB: (airBnB) =>
    set((state) => ({
      airBnB: airBnB,
    })),
  count_anb: 12,
  setCountAnB: () =>
    set((state) => ({
      count_anb: state.count_anb + 12,
    })),
  fetchAirBnBData: async () => {
    axios
      .get(
        `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/airbnb-listings/records?limit=${
          useMyStore.getState().count_anb
        }`
      )
      .then((response) =>
        useMyStore.getState().setAirBnB(response.data.results)
      );
  },
}));
