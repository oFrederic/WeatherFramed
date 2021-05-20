import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import WeatherCard from './components/Weather/WeatherCard';
import { RootState } from './store/index';
import { getUserLocation } from './store/localisation-actions';
import { getCurrentWeather } from './store/weather-actions';

const App = () => {
  console.log('RENDERING!!!');
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.localisation);
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    if (location.city === '') dispatch(getUserLocation());
    if (location.city !== '' && weather.location === '')
      dispatch(getCurrentWeather(location));

    console.log(weather, 'recieve and formated weather object');
  }, [dispatch, location, weather]);

  return (
    <Fragment>
      <Header />
      <WeatherCard />
    </Fragment>
  );
};

export default App;
