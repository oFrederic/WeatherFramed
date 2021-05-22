import { createSlice } from '@reduxjs/toolkit';

interface WeatherState {
  location: string;
  weather: string;
  temp: number;
  windSpeed: number;
  humidity: number;
  timer: Date;
}

const initialState: WeatherState = {
  location: '',
  weather: '',
  temp: 0,
  windSpeed: 0,
  humidity: 0,
  timer: new Date(),
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action) {
      state.location = action.payload.location;
      state.weather = action.payload.weather;
      state.temp = Math.round(action.payload.temp);
      // transform m/s to km/h (1m/s = 3.6km/h).
      state.windSpeed = Math.round(action.payload.windSpeed * 3.6);
      state.humidity = action.payload.humidity;
      state.timer = action.payload.timer;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
