import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Cards from "./Cards";
import Data from "../Data";
import axios from "../axios";

function BodyBottom() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Data.fetchBestYear.url);
      // console.log(request);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  return (
    <Section>
      <Container>
        <Heading>
          <h1> ON BLU-RAY, DVD & DIGITAL </h1>
        </Heading>
        <Slider {...settings}>
          {movie.map((movie) => (
            <Cards movie={movie} key={movie.id} />
          ))}
        </Slider>
      </Container>
    </Section>
  );
}

export default BodyBottom;

const Section = styled.div`
  margin-top: 50px;
  .slick-slide {
    margin-right: 15px;
    width: 260px !important;
    wrap: nowrap;
  }
  .slick-track {
    width: max-content !important;
  }
`;
const Container = styled.div`
  width: 72%;
  margin: 0 auto;
  .slick-prev,
  .slick-next {
    color: black;
    background: white;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    color: black;
  }
`;
const Heading = styled.div`
  margin-bottom: 50px;
`;
