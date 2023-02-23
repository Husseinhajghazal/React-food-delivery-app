import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../scss/main.css";
import ProductCard from "../components/UI/product-card/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import PageAnimation from "../components/UI/PageAnimation/PageAnimation";

const FoodDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const [btnbumped, setbtnbumped] = useState(false);

  const classes = `product__main-img ${btnbumped ? "newImage" : ""}`;

  useEffect(() => {
    setbtnbumped(true);

    setTimeout(() => {
      setbtnbumped(false);
    }, 300);
  }, [previewImg]);

  return (
    <PageAnimation>
      <Helmet title="Product-details">
        <CommonSection title={title} />
        <section>
          <Container>
            <Row>
              <Col lg="2" md="2">
                <div className="product__images">
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image01)}
                  >
                    <img src={product.image01} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image02)}
                  >
                    <img src={product.image02} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item"
                    onClick={() => setPreviewImg(product.image03)}
                  >
                    <img src={product.image03} alt="" className="w-50" />
                  </div>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className={classes}>
                  <img src={previewImg} alt="" className="w-100" />
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="single__product-content">
                  <h2 className="product__title mb-3">{title}</h2>
                  <p className="product__price">
                    Price: <span>${price}</span>
                  </p>
                  <p className="category mb-5">
                    Category: <span>{category}</span>
                  </p>
                  <button onClick={addItem} className="addToCart__btn">
                    Add to Cart
                  </button>
                </div>
              </Col>
              <Col lg="12">
                <div className="tabs d-flex align-items-center gap-5 py-3">
                  <h6 className="tab__active">Description</h6>
                </div>

                <div className="tab__content">
                  <p>{desc}</p>
                </div>
              </Col>

              <Col lg="12" className="mb-5 mt-4">
                <h2 className="related__Product-title">You might also like</h2>
              </Col>

              {relatedProduct.map((item) => (
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </Helmet>
    </PageAnimation>
  );
};

export default FoodDetails;
