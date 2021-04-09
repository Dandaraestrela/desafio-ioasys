import { StyledTooltipWrapper, StyledSpan } from "./styled";

/*
  - O componente Tooltip pretende exibir para o usuário se houve um
  - erro durante sua tentativa de login.
*/

export const Tooltip = (props) => {
  return (
    <>
      {props.show ? (
        <StyledTooltipWrapper>
          <StyledSpan>Email e/ou senha incorretos.</StyledSpan>
        </StyledTooltipWrapper>
      ) : null}
    </>
  );
};

export default Tooltip;
