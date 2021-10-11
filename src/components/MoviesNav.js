import React from "react";
import styled from "styled-components";
import Data from "../Data";

function MoviesNav({ setSelectedOption }) {
  return (
    <Nav>
      <h1>20th Century Studios Movies</h1>
      <div className="NavigationSection" id="NavigationBar">
        <h4
          data-index="1"
          className="active"
          onClick={() => {
            setSelectedOption(Data.fetchFeatured);
          }}
        >
          Featured
        </h4>
        <h4
          data-index="2"
          onClick={() => {
            setSelectedOption(Data.fetchActionAdventure);
          }}
        >
          Action/Adventure
        </h4>
        <h4
          data-index="3"
          onClick={() => {
            setSelectedOption(Data.fetchComedy);
          }}
        >
          Comedy
        </h4>
        <h4
          data-index="4"
          onClick={() => {
            setSelectedOption(Data.fetchCrimeMestery);
          }}
        >
          Crime/Mystery
        </h4>
        <h4
          data-index="5"
          onClick={() => {
            setSelectedOption(Data.fetchDrama);
          }}
        >
          Drama
        </h4>
        <h4
          data-index="6"
          onClick={() => {
            setSelectedOption(Data.fetchHoror);
          }}
        >
          Horror
        </h4>
        <h4
          data-index="7"
          onClick={() => {
            setSelectedOption(Data.fetchRomance);
          }}
        >
          Romance
        </h4>
        <h4
          data-index="8"
          onClick={() => {
            setSelectedOption(Data.fetchScienceFic);
          }}
        >
          Science-Fiction
        </h4>
        <h4
          data-index="9"
          onClick={() => {
            setSelectedOption(Data.fetchSuspenceThriller);
          }}
        >
          Suspense/Thriller
        </h4>
      </div>
    </Nav>
  );
}

export default MoviesNav;

const Nav = styled.div`
  width: 73%;
  margin: 25px auto;
  margin-top: 6%;
  h1 {
    color: #000;
    font-size: 28px;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .NavigationSection {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    padding: 10px 0;
    h4 {
      cursor: pointer;
      position: relative;
      margin-right: 25px;
      user-select: none;
    }
    h4:hover {
      color: #907137;
    }
    .active:before {
      content: "";
      width: -webkit-fill-available;
      height: 5px;
      position: absolute;
      left: 50%;
      bottom: -5px;
      background-color: #907137;
      -webkit-transform: translate(-50%, 50%);
      -ms-transform: translate(-50%, 50%);
      transform: translate(-50%, 50%);
    }
  }
  .NavigationSection::-webkit-scrollbar {
    display: none;
  }
  .NavigationSection {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
