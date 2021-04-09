import styled from "styled-components";

export const StyledDialogBackground = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const StyledExit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const StyledExitButton = styled.button`
  position: absolute;
  top: 1.52%;
  margin-right: 16px;
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.2);
  background-color: #ffffff;
  margin-left: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledDialogWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 769px;
  max-height: 608px;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  align-self: center;
  padding: 48px;
  margin-top: 48px;
  margin-left: 48px;
  margin-right: 48px;
  margin-bottom: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 24px;
  }
  overflow-y: auto;
  ::-webkit-scrollbar {
    background-color: #f4f4f4;
    width: 4px;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ab2680;
    border-radius: 4px;
  }
`;

export const StyledImage = styled.img`
  max-width: 349px;
  max-height: 512px;
  align-self: center;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
  @media (max-width: 600px) {
    width: 240px;
    height: 351px;
  }
  @media (max-width: 900px) {
    margin-bottom: 24px;
  }
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 512px;
  margin-left: 48px;
  width: 100%;
  @media (max-width: 900px) {
    margin-left: 0px;
  }
`;

export const StyledPrincipalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    margin-bottom: 32px;
  }
`;

export const StyledSecondaryInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 900px) {
    margin-bottom: 32px;
  }
`;

export const StyledTertiaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    display: inline;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: justify;
    color: #999999;
    margin: 0px;
    width: 100%;
    align-items: center;
  }
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #333333;
    margin: 0px;
    margin-bottom: 8px;
  }
`;

export const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: #333333;
  margin: 0px;
`;

export const StyledAuthor = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
  margin: 0px;
`;

export const StyledMockInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #333333;
    margin: 0px;
  }
`;

export const StyledInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    text-align: right;
    color: #999999;
    margin: 0px;
  }
`;
