import { useSelector } from 'react-redux';
import { RootState } from 'store/index';

import {
  Container,
  Humidity,
  HumidityIconWrapper,
  HumidityLevel,
  Wind,
  WindIconWrapper,
  WindLevel,
} from 'components/Weather/Details/WeatherDetails.styles';

import HumidityIcon from 'assets/Icons/humidity.svg';
import WindIcon from 'assets/Icons/windSpeed.svg';

export const WeatherDetails: React.FC<{}> = props => {
  const weather = useSelector((state: RootState) => state.weather);

  return (
    <Container>
      <Humidity>
        <HumidityIconWrapper src={HumidityIcon} alt="Humidity Icon" />
        <HumidityLevel>{weather.humidity}</HumidityLevel>
      </Humidity>
      <Wind>
        <WindIconWrapper src={WindIcon} alt="Wind Icon" />
        <WindLevel>{weather.windSpeed} km/h</WindLevel>
      </Wind>
    </Container>
  );
};
