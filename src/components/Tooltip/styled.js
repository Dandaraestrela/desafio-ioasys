import styled from "styled-components";

export const StyledTooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px;
  background: rgba(255, 255, 255, 0.4);
  padding: 16px;
  border-radius: 4px;
  margin-top: 16px;
`;

export const StyledSpan = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  ::after {
    content: " ";
    position: absolute;
    bottom: 100%; 
    left: 8%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.4) transparent;
  }
`;
