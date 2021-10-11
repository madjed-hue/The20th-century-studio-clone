/* eslint-disable no-loop-func */
import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoCard from "./VideoCard";

function Movies({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data["results"]);
      return request;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <Content>
      <Container>
        <div className="result">
          {movies.map((movie) => {
            return <VideoCard movie={movie} key={movie.id} />;
          })}
        </div>
      </Container>
    </Content>
  );
}

export default Movies;

const Content = styled.div`
  color: rgba(0, 0, 0, 0.7);
  background-color: #f1f2f3;
  width: 100%;
`;
const Container = styled.div`
  padding: 10px 0;
  width: 73%;
  margin: 0 auto;

  .result {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;
