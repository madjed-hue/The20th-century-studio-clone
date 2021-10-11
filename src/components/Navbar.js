import React from "react";
import styled from "styled-components";
import LogoImage from "../images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <NavBar>
      <Container>
        <Leftnav>
          <Logo src={LogoImage} />
          <LeftNavContainer className="left-nav">
            <Link to="/" className="home">
              <NavOne className="active">Home</NavOne>
            </Link>
            <Link to="/Movies" className="home">
              <NavTow>Movies</NavTow>
            </Link>
          </LeftNavContainer>
        </Leftnav>
        <Rightnav>
          <Button>
            <SearchIcon className="theIcon" />
          </Button>
          <Form>
            <Input placeholder="Search" />
          </Form>
        </Rightnav>
      </Container>
    </NavBar>
  );
}

export default Navbar;

const NavBar = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  min-height: 76px;
  position: fixed;
  z-index: 10;
  overflow: hidden;
  top: 0;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 72px;
  margin: 0 auto;
`;
const Leftnav = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  max-height: 100%;
  margin-right: 15px;
  cursor: pointer;
  flex-shrink: 0;
  height: 52px;
  ${"" /* margin: 12px 72px 12px 36px; */}
  z-index: 16;
`;
const LeftNavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 25px;
  .home {
    color: #fff;
    text-decoration: none;
    position: relative;
  }
  .home .active::before {
    content: "";
    width: 60px;
    height: 5px;
    position: absolute;
    left: 25%;
    bottom: -10px;
    background-color: #907137;
    -webkit-transform: translate(-50%,50%);
    -ms-transform: translate(-50%,50%);
    -webkit-transform: translate(-50%,50%);
    -ms-transform: translate(-50%,50%);
    transform: translate(-50%,50%);
`;
const NavOne = styled.li`
  margin-right: 15px;
  cursor: pointer;
  margin-right: 50px;
  font-weight: bold;
`;
const NavTow = styled.li`
  cursor: pointer;
  margin-right: 50px;
`;
const Rightnav = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  height: 70%;
  border: 1px solid #ccc;
  margin: 15px 0;
  border-radius: 4px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
`;
const Form = styled.form``;
const Input = styled.input`
  border: none;
  background: transparent;
  height: 100%;
  color: white;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  .theIcon {
    border: none;
    background-color: transparent;
    color: #ccc;
    width: 30px;
    height: 30px;
    font-weight: bold;
    margin-right: 10px;
  }
`;
