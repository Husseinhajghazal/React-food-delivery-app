import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import "../scss/main.css";
import ReactPaginate from "react-paginate";
import PageAnimation from "../components/UI/PageAnimation/PageAnimation";

const AllFoods = () => {
  const [sorted, setSorted] = useState("default");
  const [sortedProducts, setSortedProducts] = useState(products);

  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPagenumber] = useState(0);

  useEffect(() => {
    if (sorted === "default") {
      setSortedProducts(products);
    }

    if (sorted === "ascending") {
      const sortWay = products.sort((a, b) => a.title.localeCompare(b.title));
      setSortedProducts([...sortWay]);
    }

    if (sorted === "descending") {
      const sortWay = products.sort((a, b) => b.title.localeCompare(a.title));
      setSortedProducts([...sortWay]);
    }

    if (sorted === "high-price") {
      const sortWay = products.sort((a, b) => b.price - a.price);
      setSortedProducts([...sortWay]);
    }

    if (sorted === "low-price") {
      const sortWay = products.sort((a, b) => a.price - b.price);
      setSortedProducts([...sortWay]);
    }
  }, [sorted]);

  // eslint-disable-next-line array-callback-return
  const searchedProduct = sortedProducts.filter((item) => {
    if (searchTerm.trim().value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())) {
      return item;
    }
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PageAnimation>
      <Helmet title="All Foods">
        <CommonSection title="All Foods" />

        <section>
          <Container>
            <Row>
              <Col lg="6" md="6" sm="6" xs="12">
                <div className="search__widget d-flex align-items-center justify-content-between">
                  <input
                    type="text"
                    placeholder="I'm looking for...."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <span>
                    <i className="ri-search-line" />
                  </span>
                </div>
              </Col>
              <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
                <div className="sorting__widget text-end">
                  <select
                    className="w-50"
                    onChange={(event) => setSorted(event.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="ascending">Alphabetically, A-Z</option>
                    <option value="descending">Alphabetically, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                  </select>
                </div>
              </Col>

              {displayPage.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                  <ProductCard item={item} />
                </Col>
              ))}

              <div>
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel="Prev"
                  nextLabel="Next"
                  containerClassName="paginationBtns"
                />
              </div>
            </Row>
          </Container>
        </section>
      </Helmet>
    </PageAnimation>
  );
};

export default AllFoods;
