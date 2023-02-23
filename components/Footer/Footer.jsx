import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../scss/main.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="Logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                corrupti assumenda tempora sunt laudantium id.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>Friday - Saturday</span>
                <p>Off days</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <p>Location: Istanbul, Turkiye</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>
                  <a href="tel:+905388977939">Phone: 05388977939</a>
                </span>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item ps-0 border-0">
                <span>
                  <a href="mailto: husseinghazal01@gmail.com">
                    Email: husseinghazal01@gmail.com
                  </a>
                </span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <Link to="/login">
                  <i className="ri-send-plane-line" />
                </Link>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Hussein Haj GHazal. All Rights
              Reserved
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <a href="https://www.facebook.com/profile.php?id=100011188868575">
                  <i className="ri-facebook-line" />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/husseingh01/?hl=tr">
                  <i className="ri-instagram-line" />
                </a>
              </span>
              <span>
                <a href="https://github.com/Husseinhajghazal">
                  <i className="ri-github-line" />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/hussein-haj-ghazal-505ba4243/">
                  <i className="ri-linkedin-line" />
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
