import styled from "styled-components";
import Background from "../../assets/1stBackground.png";

export const StyledHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1%;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  padding: 2% 4%;
`;

export const StyledList = styled.div`
  width: 90%;
  height: 80%;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledLoading = styled.img`
  width: 4%;
  height: auto;
  align-self: center;
`;
