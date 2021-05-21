import axios from 'axios';

import { weatherActions } from 'store/weather';
import { AppDispatch } from 'store/index';
import { uiActions } from 'store/ui';

export const getCurrentWeather = (localisation: {
  city: string;
  country: string;
}) => {
  return async (dispatch: AppDispatch) => {
    const getWeather = async () => {
      console.log('openweathermap API call!');
      dispatch(
        uiActions.setNotification({
          status: 'pending',
          title: 'Fetching...',
          message: 'Fetching weather data!',
        })
      );
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
        dispatch(
          uiActions.setNotification({
            status: 'success',
            title: 'Success!',
            message: 'Fetching weather data successfully!',
          })
        );
      }
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching weather data failed!',
        })
      );
      throw new Error("Couldn't get the Weather");
    }
  };
};
