import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <ul>
            <li>Searchlight</li>
            <li>Redeem Digital Codes</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Your California Privacy Rights</li>
            <li>Children’s Online Privacy Policy</li>
            <li>Interest-Based Ads</li>
            <li>Do Not Sell My Info</li>
          </ul>
        </div>
        <div>
          <p>© No Rights, This is a Just Clone</p>
        </div>
      </Content>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
  width: 100%;
  margin-top: 40px;
`;
const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  color: #fff;
  background-color: #000;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin: 10px 0;
  }
  div ul {
    display: flex;
    list-style: none;
  }
  div ul li {
    cursor: pointer;
    margin: 0 15px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    font-family: proximanova, Matterhorn, Helvetica, "sans-serif";
  }
`;
