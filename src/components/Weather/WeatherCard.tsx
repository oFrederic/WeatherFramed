import styled from '@emotion/styled';
import Card from '../UI/Card/Card';
import WeatherInformation from './Informations/WeatherInformation';
import WeatherDetails from './Details/WeatherDetails';
// @ts-ignore
import SunnyVideo from '../../assets/Videos/clear.mp4';

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
  return (
    <Card>
      <BackgroundVideo>
        <Video autoPlay muted loop>
          <source src={SunnyVideo}></source>
        </Video>
      </BackgroundVideo>
      <City>TOKYO, JP</City>
      <WeatherInformation />
      <WeatherDetails />
    </Card>
  );
};

export default WeatherCard;
