import axios from 'axios';

import { localisationActions } from './localisation';
import { AppDispatch } from './index';

export const getUserLocation = () => {
  return async (dispatch: AppDispatch) => {
    const getLocation = async () => {
      console.log('gelocalisation API call!');
      const response = await axios('https://ipapi.co/json/');
      const data = response.data;
      const city = data.city;
      const country = data.country_code;
      return { city, country };
    };

    try {
      const location = await getLocation();
      if (location) dispatch(localisationActions.setLocation(location));
    } catch (error) {
      throw new Error("Couldn't get the user location");
    }
  };
};
