import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function VideoCard({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original";

  return (
    <Card>
      <Link to={`/Detail/${movie.id}`}>
        <img
          src={`${base_url}${movie.poster_path}`}
          alt={movie.original_title}
        />
      </Link>
      <h4>{movie.title}</h4>
    </Card>
  );
}

export default VideoCard;

const Card = styled.div`
  width: 250px;
  margin-bottom: 20px;
  margin-right: 20px;
  img {
    width: 100%;
    object-fit: contain;
    transition: all 0.4s;
    margin-bottom: 10px;
  }
  img:hover {
    transform: scale(1.03);
  }
`;
