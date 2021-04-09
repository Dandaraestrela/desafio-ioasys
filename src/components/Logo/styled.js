import styled from "styled-components";

export const StyledLogoWrapper = styled.div`
display: flex;
`;

export const StyledLogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  margin-bottom: ${props => (props.margin === true) ? '32px' : '0px'};;
  h1 {
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => (props.color === 'White') ? '#ffffff' : '#000000'};
    margin: 0px;
    margin-left: 16px;
  }
`;

export const StyledColor = styled.img`
 display: flex;
  flex-direction: row;
  width: 104px;
  height: 36px;
`;
