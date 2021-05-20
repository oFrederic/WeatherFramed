import { useSelector } from 'react-redux';
import { RootState } from '../../../store/index';

import styled from '@emotion/styled';

import HumidityIcon from '../../../assets/Icons/humidity.svg';
import WindIcon from '../../../assets/Icons/windSpeed.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Humidity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;
`;

const HumidityIconWrapper = styled.img`
  width: 5rem;
  height: 5rem;
`;

const HumidityLevel = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-top: 0.5rem;
  font-weight: normal;
`;

const Wind = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1.5rem;
`;

const WindIconWrapper = styled.img`
  width: 5rem;
  height: 5rem;
`;

const WindLevel = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-top: 0.5rem;
  font-weight: normal;
`;

export interface WeatherDetailsProps {}

const WeatherDetails: React.FC<WeatherDetailsProps> = props => {
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

export default WeatherDetails;
