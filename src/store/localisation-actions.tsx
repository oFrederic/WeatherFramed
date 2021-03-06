import axios from 'axios';

import { localisationActions } from 'store/localisation';
import { AppDispatch } from 'store/index';
import { uiActions } from 'store/ui';

export const getUserLocation = () => {
  return async (dispatch: AppDispatch) => {
    const getLocation = async () => {
      console.log('gelocalisation API call!');
      dispatch(
        uiActions.setNotification({
          status: 'pending',
          title: 'Fetching...',
          message: 'Fetching location data!',
        })
      );
      const response = await axios('https://ipapi.co/json/');
      const data = response.data;
      const city = data.city.split('-ku')[0];
      const country = data.country_code;
      return { city, country };
    };

    try {
      const location = await getLocation();
      if (location) dispatch(localisationActions.setLocation(location));
      dispatch(
        uiActions.setNotification({
          status: 'success',
          title: 'Success!',
          message: 'Fetching location data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching location data failed!',
        })
      );
      throw new Error("Couldn't get the user location");
    }
  };
};
