import {
  StyledCardWrapper,
  StyledImage,
  StyledInfoContainer,
  StyledPrincipalInfoContainer,
  StyledTitle,
  StyledAuthor,
  StyledSecondaryInfoContainer,
  StyledInfo,
} from "./styled";
import { useState } from "react";
import Dialog from "../../components/Dialog";

/*
  - O componente Card pretende exibir as informações principais de determinado
  - livro listado na interface, além disso, recebe todas as propriedades deste livro
  - de forma que quando for acionada a chamada do modal (através do componente Card)
  - o modal possa receber todas as propriedades necessárias.
*/

export const Card = (props) => {
  const [showDialog, setShowDialog] = useState(false);

  function onClickHandler() {
    var state = !showDialog;
    setShowDialog(state);
  }

  return (
    <>
      <StyledCardWrapper onClick={onClickHandler}>
        <StyledImage src={props.src}></StyledImage>
        <StyledInfoContainer>
          <StyledPrincipalInfoContainer>
            <StyledTitle>{props.title}</StyledTitle>
            {props.authors?.map((author) => {
              return <StyledAuthor>{author}</StyledAuthor>;
            })}
          </StyledPrincipalInfoContainer>
          <StyledSecondaryInfoContainer>
            <StyledInfo>{props.pageCount}</StyledInfo>
            <StyledInfo>{props.publisher}</StyledInfo>
            <StyledInfo>{props.published}</StyledInfo>
          </StyledSecondaryInfoContainer>
        </StyledInfoContainer>
      </StyledCardWrapper>
      {showDialog ? (
        <Dialog
          src={props.src}
          title={props.title}
          authors={props.authors}
          pageCount={props.pageCount}
          publisher={props.publisher}
          published={props.published}
          language={props.language}
          isbn10={props.isbn10}
          isbn13={props.isbn13}
          description={props.description}
          exitHandler={onClickHandler}
        ></Dialog>
      ) : null}
    </>
  );
};

export default Card;
