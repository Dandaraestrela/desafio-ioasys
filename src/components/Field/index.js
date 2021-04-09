import {
  StyledFieldWrapper,
  StyledFieldEmail,
  StyledFieldPassword,
  StyledContainerField,
  StyledButton,
  StyledFieldWTooltip
} from "./styled";
import Tooltip from '../Tooltip';

export const Field = (props) => {

  return (
    <StyledFieldWTooltip>
    <StyledFieldWrapper>
      {props.type === "email" && (
        <StyledFieldEmail>
          <StyledContainerField>
            <h2>Email</h2>
            <input placeholder="Digite seu email" {...props.register("email")}></input>
          </StyledContainerField>
        </StyledFieldEmail>
      )}
      {props.type === "password" && (
       
        <StyledFieldPassword>
          <StyledContainerField>
            <h2>Senha</h2>
            <input placeholder="Digite sua senha" type="password" {...props.register("password")}></input>
          </StyledContainerField>
          <StyledButton type={"submit"}>Entrar</StyledButton>
        </StyledFieldPassword>
      )} 
    </StyledFieldWrapper>
    <Tooltip show={props.error}></Tooltip>
    </StyledFieldWTooltip>
    
  );
};

export default Field;
