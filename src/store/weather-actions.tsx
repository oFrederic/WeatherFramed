import axios from 'axios';

import { weatherActions } from 'store/weather';
import { AppDispatch } from 'store/index';
import { uiActions } from 'store/ui';

// This function get the weather and return true if it was fetch more than 5 min in the past.
const isCachedDataExpired = (cacheData: string | null) => {
  if (cacheData) {
    const data = JSON.parse(cacheData);
    const FIVE_MIN = 5 * 60 * 1000;
    const now = new Date();
    const then = new Date(data.timer);

    return now.getTime() - then.getTime() > FIVE_MIN;
  }
};

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

      const data = response.data;
      return data;
    };

    try {
      const cachedData = localStorage.getItem(localisation.city.toLowerCase());
      const isExpired = isCachedDataExpired(cachedData);
      // if the cache does NOT contain the city or 5min as past we fetch data
      if (!cachedData || isExpired) {
        const data = await getWeather();
        if (data) {
          const currWeather = {
            location: `${data.name}, ${data.sys.country}`,
            weather: data.weather[0].main,
            temp: data.main.temp,
            windSpeed: data.wind.speed,
            humidity: data.main.humidity,
            timer: new Date(),
          };

          dispatch(weatherActions.setWeather(currWeather));
          dispatch(
            uiActions.setNotification({
              status: 'success',
              title: 'Success!',
              message: 'Fetching weather data successfully!',
            })
          );

          // We cache the current location and the current weather
          localStorage.setItem(
            localisation.city.toLowerCase(),
            JSON.stringify(currWeather)
          );
        }
      } else {
        //if the cache DOES contain de city weather data fetched in the last 5 min we get it back
        const JsonWeather = localStorage.getItem(
          localisation.city.toLowerCase()
        );
        const weather = JSON.parse(JsonWeather!);
        dispatch(weatherActions.setWeather(weather));
      }
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching weather data failed!',
        })
      );
      throw new Error(error);
    }
  };
};
