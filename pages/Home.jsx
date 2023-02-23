import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import { Link } from "react-router-dom";
import "../scss/main.css";
import Category from "../components/UI/Category/Category";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";

import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from "../components/UI/product-card/ProductCard";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import Slider from "react-slick";

import PageAnimation from "../components/UI/PageAnimation/PageAnimation";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at.",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at.",
  },
];

const Home = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToSctoll: 1,
  };

  const [enteredName, setEnteredName] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const filteredPizza = allProducts.filter(
      (item) => item.category === "Pizza"
    );
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [allProducts]);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const fitlteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(fitlteredProducts);
    }
    if (category === "PIZZA") {
      const fitlteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(fitlteredProducts);
    }
    if (category === "BREAD") {
      const fitlteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(fitlteredProducts);
    }
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName.length === 0) {
      console.log("stop!");
      return;
    }

    if (reviewMsg.length === 0) {
      console.log("stop!");
      return;
    }

    fetch(
      "https://food-web-app-84ddc-default-rtdb.europe-west1.firebasedatabase.app/comments.json",
      {
        method: "POST",
        body: JSON.stringify({
          comment: reviewMsg,
          userName: enteredName,
        }),
      }
    );

    setEnteredName("");
    setReviewMsg("");
  };

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://food-web-app-84ddc-default-rtdb.europe-west1.firebasedatabase.app/comments.json"
      );

      const responseData = await response.json();

      const loadedComments = [];

      for (const key in responseData) {
        loadedComments.push({
          id: key,
          userName: responseData[key].userName,
          comment: responseData[key].comment,
        });
      }

      setComments(loadedComments);
    };

    fetchComments().catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <PageAnimation>
      <Helmet title="Home">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <h1 className="mb-4 hero__title">
                    <span>HUNGRY?</span> Just wait <br /> food at{" "}
                    <span>your door</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod amet harum soluta tempora accusamus aliquid!
                  </p>
                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      <Link to="/cart">
                        Order now <i className="ri-arrow-right-s-line" />
                      </Link>
                    </button>
                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>
                  <div className="hero__service d-flex align-items-center gap-5 mt-5">
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i className="ri-car-line" />
                      </span>{" "}
                      No shipping charge
                    </p>
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i className="ri-shield-check-line" />
                      </span>{" "}
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={heroImg} alt="hero-img" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pt-0">
          <Category />
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h5 className="feature__subtitle mb-4">What we serve</h5>
                <h2 className="feature__title">Just sit back at home</h2>
                <h2 className="feature__title">
                  we will <span>take care</span>
                </h2>
                <p className="mb-1 mt-4 feature__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, ipsum?
                </p>
                <p className="feature__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  aperiam.
                </p>
              </Col>
              {featureData.map((item, index) => (
                <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                  <div className="feature__item text-center px-5 py-5">
                    <img
                      src={item.imgUrl}
                      alt="feature-img"
                      className="w-25 mb-3"
                    />
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>Popular Foods</h2>
              </Col>
              <Col lg="12">
                <div className="food__category d-flex align-items-center justify-content-center gap-4">
                  <button
                    className={`all__btn ${
                      category === "ALL" && "foodBtnActive"
                    }`}
                    onClick={() => {
                      setCategory("ALL");
                    }}
                  >
                    All
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === "BURGER" && "foodBtnActive"
                    }`}
                    onClick={() => {
                      setCategory("BURGER");
                    }}
                  >
                    <img src={foodCategoryImg01} alt="" />
                    Burger
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === "PIZZA" && "foodBtnActive"
                    }`}
                    onClick={() => {
                      setCategory("PIZZA");
                    }}
                  >
                    <img src={foodCategoryImg02} alt="" />
                    Pizza
                  </button>
                  <button
                    className={`d-flex align-items-center gap-2 ${
                      category === "BREAD" && "foodBtnActive"
                    }`}
                    onClick={() => {
                      setCategory("BREAD");
                    }}
                  >
                    <img src={foodCategoryImg03} alt="" />
                    Bread
                  </button>
                </div>
              </Col>

              {allProducts.map((item) => (
                <Col lg="3" md="4" key={item.id} className="mt-5">
                  <PageAnimation>
                    <ProductCard item={item} />
                  </PageAnimation>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="why__choose-us">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <img src={whyImg} alt="why-tasty-treat" className="w-100" />
              </Col>
              <Col lg="6" md="6">
                <div className="why__tasty-treat">
                  <h2 className="tasty__treat-title mb-4">
                    Why <span>Tasty Treat</span>
                  </h2>
                  <p className="tasty__treat-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae sit atque cum assumenda? Reprehenderit officiis
                    quis provident rerum ex error quos quo est tempore dolorum
                    doloribus, consequatur modi harum ducimus!
                  </p>
                  <ListGroup className="mt-4">
                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line" /> Fresh and
                        tasty foods
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero, sed.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line" /> Quality
                        support
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Fugiat, eos.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 ps-0">
                      <p className="choose__us-title d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line" /> Order from any
                        location
                      </p>
                      <p className="choose__us-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, eum!
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2>Hot Pizza</h2>
              </Col>
              {hotPizza.map((item) => (
                <Col lg="3" md="4" key={item.id}>
                  <ProductCard item={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="testimonial">
                  <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                  <h2 className="testimonial__title mb-4">
                    What our <span>customers</span> are saying
                  </h2>
                  <p className="testimonial-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur dolorum voluptatibus est accusamus blanditiis,
                    nam ut accusantium suscipit reprehenderit ex!
                  </p>
                  <Slider {...settings}>
                    {comments.map((item) => (
                      <div key={item.id}>
                        <p className="review__text">{item.comment}</p>
                        <div className="slider__content">
                          <h6>{item.userName}</h6>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
              <Col lg="6" md="6">
                <img src={networkImg} alt="testimonial-img" className="w-100" />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <div className="tab__form mb-3">
              <form className="form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter Your name"
                    value={enteredName}
                    onChange={(e) => {
                      setEnteredName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="form__group">
                  <textarea
                    rows={5}
                    placeholder="Write your review"
                    value={reviewMsg}
                    onChange={(e) => {
                      setReviewMsg(e.target.value);
                    }}
                    required
                  />
                </div>
                <button type="submit" className="addToCart__btn">
                  Add Comment
                </button>
              </form>
            </div>
          </Container>
        </section>
      </Helmet>
    </PageAnimation>
  );
};

export default Home;
