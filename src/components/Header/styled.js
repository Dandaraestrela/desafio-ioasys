import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const StyledHeaderAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    display: inline;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #333333;
  }
  h3 {
    display: inline;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: right;
    color: #333333;
  }
  @media (max-width: 600px) {
    h2{
      display: none;
    }
    h3{
      display: none;
    }
  };
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid rgba(51, 51, 51, 0.2);
  background-color: rgba(0, 0, 0, 0);
  margin-left: 16px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledShape = styled.img`
  width: auto;
  height: auto;
`;

