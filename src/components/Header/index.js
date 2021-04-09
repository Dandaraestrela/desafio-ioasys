import { Link } from 'react-router-dom';
import { useContext } from "react";
import {
  StyledHeaderWrapper,
  StyledHeaderAction,
  StyledButton,
  StyledShape,
} from "./styled";
import { Context } from "../../GlobalContext";
import Logo from "../Logo";
import Shape from "../../assets/Log Out.png";


/*
  - O componente Header pretende exibir a logomarca da empresa, assim como
  - o nome do usuário que acessou o sistema e permitir a saída do sistema.
*/

export const Header = (props) => {
  const [user, setUser] = useContext(Context);
  const userExit = () =>{
    setUser({id: null, name: null, authorization: null})
  }
  return (
    <StyledHeaderWrapper>
      <Logo color="Black" margin={false}></Logo>
      <StyledHeaderAction>
        <h3>
          Bem vindo, <h2>{props.name}!</h2>
        </h3>
        <Link  to="/">
        <StyledButton onClick={userExit}>
          <StyledShape src={Shape}></StyledShape>
        </StyledButton>
        </Link>
        
      </StyledHeaderAction>
    </StyledHeaderWrapper>
  );
};

export default Header;
