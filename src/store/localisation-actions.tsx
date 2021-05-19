import axios from 'axios';

import { localisationActions } from './localisation';
import { AppDispatch } from './index';

export const getUserLocation = () => {
  return async (dispatch: AppDispatch) => {
    const getLocation = async () => {
      const response = await axios('https://ipapi.co/json/');
      const data = response.data;
      const location = data.region;
      return location;
    };

    try {
      const location = await getLocation();
      if (location) dispatch(localisationActions.setLocation({ location }));
    } catch (error) {
      throw new Error("Couldn't get the user location");
    }
  };
};
