import styled from '@emotion/styled';

import Sunny from '../../../assets/Icons/snow.svg';
import CelsiusIcon from '../../../assets/Icons/celsius.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  return (
    <Container>
      <Temperature>
        <TemperatureLevel>19</TemperatureLevel>
        <CelsiusIconWrapper src={CelsiusIcon} alt="Celsius Icon" />
      </Temperature>
      <WeatherIconWrapper src={Sunny} alt="Weather Icon" />
    </Container>
  );
};

export default WeatherInformation;
