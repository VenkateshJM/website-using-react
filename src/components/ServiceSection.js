import React from "react";
import Clock from "../img/clock.svg";
import Diaphragm from "../img/diaphragm.svg";
import Money from "../img/money.svg";
import Teamwork from "../img/teamwork.svg";
import Home2 from "../img/home2.png";
import styled from "styled-components";
import { StyledAbout, StyledDescription, Image } from "../StyleComponents";
import { UseScroll } from "./UseScroll";
import { scrollReveal } from "../Animation";

const ServiceSecion = () => {
  const [element, controls] = UseScroll();
  return (
    <Services
      ref={element}
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
    >
      <StyledDescription>
        <h2>
          High <span>Quality</span> Services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={Clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={Money} alt="Money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </Card>
        </Cards>
      </StyledDescription>
      <Image>
        <img src={Home2} alt="Camera" />
      </Image>
    </Services>
  );
};

const Services = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 13rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

export default ServiceSecion;
