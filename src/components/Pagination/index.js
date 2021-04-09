import {
  StyledPaginationWrapper,
  StyledNumberPages,
  StyledTitlePages,
  StyledArrowLeft,
  StyledArrowLeftResponsive,
  StyledArrowRight,
} from "./styled";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export const Pagination = (props) => {
  return (
    <StyledPaginationWrapper>
      <StyledArrowLeftResponsive first={props.first} onClick={props.handleBack} disabled={props.loading}><BsChevronLeft /></StyledArrowLeftResponsive>
      <StyledTitlePages>
        Página <StyledNumberPages>{props.currentPage}</StyledNumberPages> de {' '}
        <StyledNumberPages>{props.pageQuantity}</StyledNumberPages>
      </StyledTitlePages>
      <StyledArrowLeft first={props.first} onClick={props.handleBack} disabled={props.loading}><BsChevronLeft /></StyledArrowLeft>
      <StyledArrowRight last={props.last} onClick={props.handleNext} disabled={props.loading}><BsChevronRight /></StyledArrowRight>
    </StyledPaginationWrapper>
  );
};

export default Pagination;
