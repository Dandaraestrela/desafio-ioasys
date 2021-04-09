import {
  StyledFieldWrapper,
  StyledFieldEmail,
  StyledFieldPassword,
  StyledContainerField,
  StyledButton,
  StyledFieldWTooltip,
} from "./styled";
import Tooltip from "../Tooltip";

/*
  - O componente Field pretende exibir e permitir o preenchimento dos campos
  - de email e senha para o acesso de usuários no sistema. Recebe como propriedades
  - o tipo de campo a ser renderizado, assim como realiza o registro dos campos
  - do formulário. Este componente é responsável também por chamar o Tooltip de erro.
*/

export const Field = (props) => {
  return (
    <StyledFieldWTooltip>
      <StyledFieldWrapper>
        {props.type === "email" && (
          <StyledFieldEmail>
            <StyledContainerField>
              <h2>Email</h2>
              <input
                placeholder="Digite seu email"
                {...props.register("email")}
              ></input>
            </StyledContainerField>
          </StyledFieldEmail>
        )}
        {props.type === "password" && (
          <StyledFieldPassword>
            <StyledContainerField>
              <h2>Senha</h2>
              <input
                placeholder="Digite sua senha"
                type="password"
                {...props.register("password")}
              ></input>
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
