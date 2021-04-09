import { StyledColor, StyledLogoWrapper, StyledLogoContent } from "./styled";
import WhiteLogo from "../../assets/WhiteLogo.png";
import BlackLogo from "../../assets/BlackLogo.png";

/*
  - O componente Logo pretende exibir a logomarca da empresa e sistema, com
  - diferença no modo de exibição acordo com a propriedade recebida (Black || White) 
*/

export const Logo = (props) => {
  return (
    <StyledLogoWrapper>
      {props.color === "White" && (
        <StyledLogoContent color={props.color} margin={props.margin}>
          <StyledColor src={WhiteLogo} alt={"Logomarca Ioasys"} />
          <h1>Books</h1>{" "}
        </StyledLogoContent>
      )}
      {props.color === "Black" && (
        <StyledLogoContent color={props.color} margin={props.margin}>
          <StyledColor src={BlackLogo} alt={"Logomarca Ioasys"} />
          <h1>Books</h1>
        </StyledLogoContent>
      )}
    </StyledLogoWrapper>
  );
};
export default Logo;
