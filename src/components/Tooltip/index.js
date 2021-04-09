import { StyledTooltipWrapper, StyledSpan } from './styled';

export const Tooltip = (props) => {
    return (
        <div>
        {props.show ? <StyledTooltipWrapper><StyledSpan>Email e/ou senha incorretos.</StyledSpan></StyledTooltipWrapper> : null}
        </div>
    );
}

export default Tooltip;