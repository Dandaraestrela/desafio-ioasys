import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledHomeWrapper, StyledContent } from "./styled";
import { useForm } from "react-hook-form";
import { Context } from "../../GlobalContext";
import Logo from "../../components/Logo";
import Field from "../../components/Field";
import axios from "axios";

/*
  - O layout (página) Login pretende permitir ao usuário o preenchimento
  - de dados e acesso ao sistema. Este componente deve tentar se conectar à API
  - enviando os dados preenchidos pelo usuário e indicando o sucesso ou erro da ação.
*/

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(false);
  const [user, setUser] = useContext(Context);
  let history = useHistory();

  const onSubmit = (data) => {
    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          authorization: response.headers.authorization,
        });
        setError(false);
        history.push("/home");
      })
      .catch((error) => {
        /* envia na props do field que deve exibir modal com erro */
        setError(true);
      });
  };

  return (
    <StyledHomeWrapper>
      <StyledContent>
        <Logo color={"White"} margin={true}></Logo>
        {/* o form onSubmit vai pegar a ação do botão que estiver presente*/}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field type={"email"} register={register}></Field>
          <Field type={"password"} register={register} error={error}></Field>
        </form>
      </StyledContent>
    </StyledHomeWrapper>
  );
};

export default Login;
