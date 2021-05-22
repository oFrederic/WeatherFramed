import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

import { Card } from 'components/UI/Card/Card';
import { WeatherInformation } from 'components/Weather/Informations/WeatherInformation';
import { WeatherDetails } from 'components/Weather/Details/WeatherDetails';

import cloud from 'assets/Videos/cloud.mp4';
import clear from 'assets/Videos/clear.mp4';
import rain from 'assets/Videos/rain.mp4';
import snow from 'assets/Videos/snow.mp4';
import thunder from 'assets/Videos/thunder.mp4';

import {
  City,
  Video,
  BackgroundVideo,
} from 'components/Weather/WeatherCard.styles';

export const WeatherCard: React.FC<{}> = props => {
  const weather = useSelector((state: RootState) => state.weather);

  let currBackground;

  switch (weather.weather) {
    case 'Clear':
      currBackground = clear;
      break;

    case 'Clouds':
      currBackground = cloud;
      break;

    case 'Rain':
    case 'Drizzle':
      currBackground = rain;
      break;

    case 'Snow':
      currBackground = snow;
      break;

    case 'Thunderstorm':
      currBackground = thunder;
      break;

    default:
      break;
  }

  return (
    <Card>
      <BackgroundVideo>
        <Video autoPlay muted loop src={currBackground}>
          <source src={currBackground} type="video/mp4" />
        </Video>
      </BackgroundVideo>
      <City>{weather.location}</City>
      <WeatherInformation />
      <WeatherDetails />
    </Card>
  );
};
