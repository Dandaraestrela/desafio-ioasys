import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 272px;
  height: 160px;
  left: 115px;
  top: 120px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  padding: 16px;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 8px;
  margin-left: 8px;
  cursor: pointer;
`;

export const StyledImage = styled.img`
  max-height: 122px;
  width: auto;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 8px;
  width: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar{
    background-color: #F4F4F4;
    width: 4px;
    border-radius:4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
    border-radius:4px;
}
`;

export const StyledPrincipalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const StyledTitle = styled.h1`
display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
  margin: 0px;
`;

export const StyledAuthor = styled.h2`
display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
  margin: 0px;
`;

export const StyledSecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

`;

export const StyledInfo = styled.h3`
display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #999999;
  margin: 0px;
`;
