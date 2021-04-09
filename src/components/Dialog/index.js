import {
  StyledDialogBackground,
  StyledDialogWrapper,
  StyledExit,
  StyledExitButton,
  StyledImage,
  StyledInfoContainer,
  StyledPrincipalInfoContainer,
  StyledSecondaryInfoContainer,
  StyledTertiaryInfoContainer,
  StyledTitle,
  StyledAuthor,
  StyledMockInfo,
  StyledInfo,
} from "./styled";
import { BsX } from "react-icons/bs";
import Book from "../../assets/Book.png";
import Quotes from "../../assets/Quotes.png";

export const Dialog = (props) => {
  return (
    <StyledDialogBackground>
      <StyledExit>
        <StyledExitButton onClick={props.exitHandler}>
          <BsX style={{ width: "16px", height: "16px", color: "#333333" }} />
        </StyledExitButton>
      </StyledExit>

      <StyledDialogWrapper>
        <StyledImage src={props.src}></StyledImage>
        <StyledInfoContainer>
          <StyledPrincipalInfoContainer>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledAuthor>
              {props.authors?.map((author, index, array) => {
                if (array.length - 1 === index) {
                  return author;
                } else {
                  return author + ", ";
                }
              })}
            </StyledAuthor>
          </StyledPrincipalInfoContainer>

          <StyledSecondaryInfoContainer>
            <StyledMockInfo>
              <h3>INFORMAÇÕES</h3>
              <h3>
                {" "}
                <br />
              </h3>
              <h3>Páginas</h3>
              <h3>Editora</h3>
              <h3>Publicação</h3>
              <h3>Idioma</h3>
              <h3>Título original</h3>
              <h3>ISBN-10</h3>
              <h3>ISBN-13</h3>
            </StyledMockInfo>
            <StyledInfo>
              <h4>{props.pageCount}</h4>
              <h4>{props.publisher}</h4>
              <h4>{props.published}</h4>
              <h4>{props.language}</h4>
              <h4>{props.title}</h4>
              <h4>{props.isbn10}</h4>
              <h4>{props.isbn13}</h4>
            </StyledInfo>
          </StyledSecondaryInfoContainer>

          <StyledTertiaryInfoContainer>
              <h3>RESENHA DA EDITORA</h3>

            <p>
              <img
                src={Quotes}
                style={{ width: "16px", display: "inline", marginRight: "4px" }}
                alt={"Quote Icon"}
              />
              {props.description}
            </p>
          </StyledTertiaryInfoContainer>
        </StyledInfoContainer>
      </StyledDialogWrapper>
    </StyledDialogBackground>
  );
};

export default Dialog;
