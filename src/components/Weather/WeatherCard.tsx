import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';

import styled from '@emotion/styled';
import Card from '../UI/Card/Card';
import WeatherInformation from './Informations/WeatherInformation';
import WeatherDetails from './Details/WeatherDetails';
// @ts-ignore
import cloud from '../../assets/Videos/cloud.m4v';
// @ts-ignore
import clear from '../../assets/Videos/clear.m4v';
// @ts-ignore
import rain from '../../assets/Videos/rain.m4v';
// @ts-ignore
import snow from '../../assets/Videos/snow.m4v';
// @ts-ignore
import thunder from '../../assets/Videos/thunder.m4v';

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

export interface WeatherCardProps {}

const WeatherCard: React.FC<WeatherCardProps> = props => {
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
        <Video autoPlay muted loop src={currBackground}></Video>
      </BackgroundVideo>
      <City>{weather.location}</City>
      <WeatherInformation />
      <WeatherDetails />
    </Card>
  );
};

export default WeatherCard;
