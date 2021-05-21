import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

import styled from '@emotion/styled';
import { Card } from 'components/UI/Card/Card';
import { WeatherInformation } from 'components/Weather/Informations/WeatherInformation';
import { WeatherDetails } from 'components/Weather/Details/WeatherDetails';

import cloud from 'assets/Videos/cloud.mp4';
import clear from 'assets/Videos/clear.mp4';
import rain from 'assets/Videos/rain.mp4';
import snow from 'assets/Videos/snow.mp4';
import thunder from 'assets/Videos/thunder.mp4';

const City = styled.h1`
  color: #f3f3f3;
  font-size: 4rem;
  text-align: center;
  z-index: 1;
  font-weight: normal;
`;

const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hiden;
  filter: blur(0.2rem);
`;

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 1;
  height: 100%;
  width: 100%;
`;

export const WeatherCard: React.FC<{}> = props => {
  const weather = useSelector((state: RootState) => state.weather);
  console.log(weather);

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

  console.log(currBackground);

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
