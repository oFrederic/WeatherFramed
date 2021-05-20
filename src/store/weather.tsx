import { createSlice } from '@reduxjs/toolkit';

interface WeatherState {
  location: string;
  weather: string;
  temp: number;
  windSpeed: number;
  humidity: number;
}

const initialState: WeatherState = {
  location: '',
  weather: '',
  temp: 0,
  windSpeed: 0,
  humidity: 0,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action) {
      state.location = action.payload.location;
      state.weather = action.payload.weather;
      state.temp = action.payload.temp;
      // transform m/s to km/h (1m/s = 3.6km/h).
      state.windSpeed = action.payload.windSpeed * 3.6;
      state.humidity = action.payload.humidity;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
