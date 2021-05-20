import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './components/Header/Header';
import WeatherCard from './components/Weather/WeatherCard';
import { RootState } from './store';
import { getUserLocation } from './store/localisation-actions';

const App = () => {
  console.log('RENDERING!!!');
  const dispatch = useDispatch();
  const location = useSelector((state: RootState) => state.localisation);

  useEffect(() => {
    dispatch(getUserLocation());
    console.log(location);
  }, [dispatch, location]);

  return (
    <Fragment>
      <Header />
      <WeatherCard />
    </Fragment>
  );
};

export default App;
