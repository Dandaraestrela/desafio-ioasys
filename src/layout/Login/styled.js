import styled from "styled-components";
import Background from "../../assets/BackgroundImage.png";

export const StyledHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  @media (max-width: 600px) {
    background-size: fit;
  } ;
`;

export const StyledContent = styled.div`
  margin-left: 115px;
  padding: 0;
  max-width: 368px;
  @media (max-width: 600px) {
    margin-left: 0px;
    align-self: center;
  } ;
`;
