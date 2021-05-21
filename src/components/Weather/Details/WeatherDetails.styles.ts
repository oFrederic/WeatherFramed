import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Humidity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5rem;
`;

export const HumidityIconWrapper = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const HumidityLevel = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-top: 0.5rem;
  font-weight: normal;
`;

export const Wind = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1.5rem;
`;

export const WindIconWrapper = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const WindLevel = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-top: 0.5rem;
  font-weight: normal;
`;
