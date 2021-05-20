import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';

import styled from '@emotion/styled';

import CelsiusIcon from '../../../assets/Icons/celsius.svg';
import clear from '../../../assets/Icons/clear.svg';
import cloud from '../../../assets/Icons/cloudy.svg';
import rain from '../../../assets/Icons/rain.svg';
import snow from '../../../assets/Icons/snow.svg';
import thunder from '../../../assets/Icons/thunder.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`;

const Temperature = styled.div`
  display: flex;
  margin-left: 2rem;
`;

const TemperatureLevel = styled.h1`
  color: #f3f3f3;
  font-size: 15rem;
  font-weight: normal;
`;

const CelsiusIconWrapper = styled.img`
  height: 3rem;
  margin-top: 2.8rem;
`;

const WeatherIconWrapper = styled.img`
  height: 12rem;
`;

export interface WeatherInformationProps {}

const WeatherInformation: React.FC<WeatherInformationProps> = props => {
  const weather = useSelector((state: RootState) => state.weather);

  let currIcon;

  switch (weather.weather) {
    case 'Clear':
      currIcon = clear;
      break;

    case 'Clouds':
      currIcon = cloud;
      break;

    case 'Rain':
    case 'Drizzle':
      currIcon = rain;
      break;

    case 'Snow':
      currIcon = snow;
      break;

    case 'Thunderstorm':
      currIcon = thunder;
      break;

    default:
      break;
  }

  return (
    <Container>
      <Temperature>
        <TemperatureLevel>{weather.temp}</TemperatureLevel>
        <CelsiusIconWrapper src={CelsiusIcon} alt="Celsius Icon" />
      </Temperature>
      <WeatherIconWrapper src={currIcon} alt="Weather Icon" />
    </Container>
  );
};

export default WeatherInformation;
