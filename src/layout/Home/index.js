import { StyledHomeWrapper, StyledList, StyledLoading } from "./styled";
import Header from "../../components/Header";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../../GlobalContext";
import DualBall from "../../assets/DualBall-2s-200px.gif";

export const Home = () => {
  const [bookResults, setBookResults] = useState([]);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  const [pageQuantity, setPageQuantity] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const [user, setUser] = useContext(Context);

  const isFirst = () => {
    if (currentPage === 1) {
      setFirstPage(true);
      setLastPage(false);
    } else if (currentPage === pageQuantity) {
      setFirstPage(false);
      setLastPage(true);
    } else {
      setFirstPage(false);
      setLastPage(false);
    }
  };

  const handleBack = () => {
    if (currentPage !== 1) {
      let newPage = currentPage - 1;
      setCurrentPage(newPage);
    }
  };
  const handleNext = () => {
    if (currentPage !== pageQuantity) {
      let newPage = currentPage + 1;
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://books.ioasys.com.br/api/v1/books?page=${currentPage}&amount=12`,
        {
          headers: { Authorization: "Bearer " + user.authorization },
        }
      )
      .then((response) => {
        setLoading(false);
        setCurrentPage(response.data.page);
        setPageQuantity(Math.ceil(response.data.totalPages));
        isFirst();
        setBookResults(response.data.data);
        setIsFirstLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data.errors.message);
      });
  }, [currentPage]);

  return (
    <StyledHomeWrapper>
      <Header name={user.name}></Header>
      {isFirstLoading && <StyledLoading src={DualBall}/>}
      <StyledList>
        {bookResults?.map((book) => {
          return (
            <Card
              src={book.imageUrl}
              title={book.title}
              authors={book.authors}
              pageCount={book.pageCount}
              publisher={book.publisher}
              published={book.published}
              language={book.language}
              isbn10={book.isbn10}
              isbn13={book.isbn13}
              description={book.description}
            ></Card>
          );
        })}
      </StyledList>
      <Pagination
        first={firstPage}
        last={lastPage}
        currentPage={currentPage}
        pageQuantity={pageQuantity}
        handleBack={handleBack}
        handleNext={handleNext}
        loading={loading}
      ></Pagination>
    </StyledHomeWrapper>
  );
};

export default Home;
