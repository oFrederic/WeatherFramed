import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { WeatherCard } from 'components/Weather/WeatherCard';
import { Notification } from 'components/UI/Notification/Notification';
import { RootState } from 'store/index';
import { getUserLocation } from 'store/localisation-actions';
import { getCurrentWeather } from 'store/weather-actions';

export const App = () => {
  // Getting the Query if there is any.
  const loc = useLocation();
  const query = new URLSearchParams(loc.search);
  const city = query.get('city');

  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.localisation);
  const weather = useSelector((state: RootState) => state.weather);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    // If there is no query...
    if (!city) {
      // we fetch the user location...
      if (location.city === '') dispatch(getUserLocation());
      // And then the weather with that current location.
      if (location.city !== '' && weather.location === '')
        dispatch(getCurrentWeather(location));
    } else {
      // If there is a query we fetch the weather for that city.
      dispatch(getCurrentWeather({ city: city!, country: '' }));
    }
  }, [dispatch, location, weather, city]);

  return (
    <Fragment>
      <Header />
      {notification.status !== 'success' && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {notification.status === 'success' && <WeatherCard />}
    </Fragment>
  );
};
