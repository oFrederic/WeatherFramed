import styled from '@emotion/styled';

export const City = styled.h1`
  color: #f3f3f3;
  font-size: 4rem;
  text-align: center;
  z-index: 1;
  font-weight: normal;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  overflow: hiden;
  filter: blur(0.2rem);
`;

export const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 1;
  height: 100%;
  width: 100%;
`;
