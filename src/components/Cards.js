import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cards({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const { poster_path, title, release_date, id } = movie;

  return (
    <Card className="card">
      <Link to={`/Detail/${id}`}>
        <CardImage>
          <img src={`${base_url}${poster_path}`} alt="" />
        </CardImage>
      </Link>
      <CardCaption>
        <Title>
          <p>{title}</p>
        </Title>
        <Release>
          <p>{release_date}</p>
        </Release>
      </CardCaption>
    </Card>
  );
}

export default Cards;

const Card = styled.div`
  ${"" /* width: 10%; */}
  margin: 0 10px;
`;
const CardImage = styled.div`
  width: 100%;
  box-shadow: 0 0 1px rgb(0 0 0 / 25%);
  margin-bottom: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
  &:hover img {
    transform: scale(1.04);
  }
`;
const CardCaption = styled.div``;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const Release = styled.div`
  font-size: 14px;
  color: rgba(29, 30, 31, 0.8);
`;
