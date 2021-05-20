import axios from 'axios';

import { weatherActions } from './weather';
import { AppDispatch } from './index';

export const getCurrentWeather = (localisation: {
  city: string;
  country: string;
}) => {
  return async (dispatch: AppDispatch) => {
    const getWeather = async () => {
      console.log('openweathermap API call!');
      const response = await axios(
        `http://api.openweathermap.org/data/2.5/weather?q=${localisation.city},${localisation.country}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      console.log('test');

      const data = response.data;
      return data;
    };

    try {
      const data = await getWeather();
      if (data) {
        const currWeather = {
          location: `${data.name}, ${data.sys.country}`,
          weather: data.weather[0].main,
          temp: data.main.temp,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
        };

        dispatch(weatherActions.setWeather(currWeather));
      }
    } catch (error) {
      throw new Error("Couldn't get the Weather");
    }
  };
};
