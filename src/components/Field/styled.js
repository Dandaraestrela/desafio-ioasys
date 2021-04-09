import styled from "styled-components";

export const StyledFieldWTooltip = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  max-width: 368px;
  max-height: 60px;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  margin-top: 16px;
  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.5;
    margin-top: 0px;
    margin-bottom: 4px;
  }
`;

export const StyledContainerField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const StyledFieldEmail = styled.div`
  width: 100%;
  input {
    width: 100%;
    margin: none;
    border: none;
    background: none;
    height: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    ::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
      opacity: 0.8;
    }
  }
`;

export const StyledFieldPassword = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  input {
      width: 90%;
    margin: none;
    border: none;
    background: none;
    height: 24px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    ::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #333333;
      opacity: 0.8;
    }
  }
`;

export const StyledButton = styled.button`
  width: 85px;
  height: 36px;
  color: #b22e6f;
  background-color: #ffffff;
  border-radius: 44px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
