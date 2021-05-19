import styled from '@emotion/styled';
import Card from '../UI/Card/Card';
import WeatherInformation from './Informations/WeatherInformation';
import WeatherDetails from './Details/WeatherDetails';

const City = styled.h1`
  color: #f3f3f3;
  font-size: 4rem;
  text-align: center;
`;

const WeatherCard: React.FC<{}> = props => {
  return (
    <Card>
      <City>TOKYO, JP</City>
      <WeatherInformation />
      <WeatherDetails />
    </Card>
  );
};

export default WeatherCard;
