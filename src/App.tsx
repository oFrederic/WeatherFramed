import { Fragment } from 'react';
import Header from './components/Header/Header';
import WeatherCard from './components/Weather/WeatherCard';

const App = () => {
  return (
    <Fragment>
      <Header />
      <WeatherCard />
    </Fragment>
  );
};

export default App;
