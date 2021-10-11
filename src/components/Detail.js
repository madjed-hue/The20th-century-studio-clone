import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../axios";
import { useParams } from "react-router-dom";
import FullDetail from "./FullDetail";

function Detail() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}`
      );
      let result = request.data;
      console.log(result);
      function companiesDetails() {
        const companiesLogo = result["production_companies"];
        const movieGenre = result["genres"];
        console.log(movieGenre);
        for (let i = 0; i < companiesLogo.length; i++) {
          const logoImg = document.getElementById("logo-img");
          let theLogogImg = document.createElement("img");
          theLogogImg.setAttribute(
            "src",
            `${base_url}${companiesLogo[i]["logo_path"]}`
          );
          theLogogImg.className = "comapnyImage";

          if (
            `${base_url}${companiesLogo[i]["logo_path"]}` === `${base_url}null`
          ) {
            theLogogImg.classList.add("non");
          } else {
            logoImg.appendChild(theLogogImg);
          }
        }
        for (let i = 0; i < movieGenre.length; i++) {
          const companyGenre = document.getElementById("movie-genres");
          let theGenre = document.createElement("h4");
          let theGenreText = document.createTextNode(
            `${movieGenre[i]["name"]}`
          );
          theGenre.appendChild(theGenreText);
          companyGenre.appendChild(theGenre);
        }
      }
      setMovie(result);
      companiesDetails();
      return request;
    }
    fetchData();
  }, [id]);
  return (
    <Container>
      <FullDetail movie={movie} key={id} />;
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  width: 100%;
`;
