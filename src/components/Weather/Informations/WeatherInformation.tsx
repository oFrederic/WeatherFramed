import styled from '@emotion/styled';

import Sunny from '../../../assets/Icons/sunny.svg';
import CelsiusIcon from '../../../assets/Icons/celsius.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Temperature = styled.div`
  display: flex;
`;

const TemperatureLevel = styled.h1`
  color: #f3f3f3;
  font-size: 15rem;
`;

const CelsiusIconWrapper = styled.img`
  height: 3rem;
  margin-top: 2.8rem;
`;

const WeatherIconWrapper = styled.img`
  height: 15rem;
`;

const WeatherInformation: React.FC<{}> = props => {
  return (
    <Container>
      <Temperature>
        <TemperatureLevel>9</TemperatureLevel>
        <CelsiusIconWrapper src={CelsiusIcon} alt="Celsius Icon" />
      </Temperature>
      <WeatherIconWrapper src={Sunny} alt="Weather Icon" />
    </Container>
  );
};

export default WeatherInformation;
