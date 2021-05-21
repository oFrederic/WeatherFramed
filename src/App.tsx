import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import WeatherCard from './components/Weather/WeatherCard';
import Notification from './components/UI/Notification/Notification';
import { RootState } from './store/index';
import { getUserLocation } from './store/localisation-actions';
import { getCurrentWeather } from './store/weather-actions';

const App = () => {
  console.log('RENDERING!!!');
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.localisation);
  const weather = useSelector((state: RootState) => state.weather);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    if (location.city === '') dispatch(getUserLocation());
    if (location.city !== '' && weather.location === '')
      dispatch(getCurrentWeather(location));

    console.log(weather, 'recieve and formated weather object');
  }, [dispatch, location, weather]);

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

export default App;
