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
`;

const HumidityIconWrapper = styled.img`
  height: 5rem;
`;

const HumidityLevel = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-top: 0.5rem;
`;

const Wind = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3rem;
`;

const WindIconWrapper = styled.img`
  height: 5rem;
`;

const WindLevel = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-top: 0.5rem;
`;

const WeatherDetails: React.FC<{}> = props => {
  return (
    <Container>
      <Humidity>
        <HumidityIconWrapper src={HumidityIcon} alt="Humidity Icon" />
        <HumidityLevel>15</HumidityLevel>
      </Humidity>
      <Wind>
        <WindIconWrapper src={WindIcon} alt="Wind Icon" />
        <WindLevel>2 km/h</WindLevel>
      </Wind>
    </Container>
  );
};

export default WeatherDetails;
