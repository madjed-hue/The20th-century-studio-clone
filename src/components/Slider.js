import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";

function Slide() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Container>
      <Overlay></Overlay>
      <Slider {...settings}>
        <div>
          <div>
            {/* <Link to="Detail"> */}
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/hb_thelastduel_21551_975003b8.jpeg?region=0,0,2048,878&width=1536"
              alt=""
            />
            <Span></Span>
            {/* </Link> */}
          </div>
          <Content>
            <ContentBody>
              <ContentDetail>
                <a href="www.google.com">
                  <ContentTitle>
                    <p>THE LAST DUEL</p>
                  </ContentTitle>
                  <ContentDesc>
                    <p>Only In Theaters October 15</p>
                  </ContentDesc>
                </a>
                <p className="cta-links-container">
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="ticket">
                        GET TICKET
                      </a>
                    </span>
                  </span>
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="visit">
                        VISIT OFFICIAL SITE
                      </a>
                    </span>
                  </span>
                </p>
              </ContentDetail>
            </ContentBody>
          </Content>
        </div>
        <div>
          <div>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/hb_20cs_freeguy_20091_c211b6e3.jpeg?region=0,0,2048,878&width=1536"
              alt=""
            />
          </div>
          <Content>
            <ContentBody>
              <ContentDetail>
                <a href="www.google.com">
                  <ContentTitle>
                    <p>FREE GUY</p>
                  </ContentTitle>
                  <ContentDesc>
                    <p>Now Available on Digital. On Blu-ray October 12</p>
                  </ContentDesc>
                </a>
                <p className="cta-links-container">
                  <span className="cta-item">
                    {/* <span className="btn-container">
                      <a href="www.google.com" className="ticket">
                        GET TICKET
                      </a>
                    </span> */}
                  </span>
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="visit">
                        VISIT OFFICIAL SITE
                      </a>
                    </span>
                  </span>
                </p>
              </ContentDetail>
            </ContentBody>
          </Content>
        </div>
        <div>
          <div>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/hb_20cs_westsidestory_21842_93c9bdae.jpeg?region=0,0,2048,878&width=1536"
              alt=""
            />
          </div>
          <Content>
            <ContentBody>
              <ContentDetail>
                <a href="www.google.com">
                  <ContentTitle>
                    <p>WEST SIDE STORY</p>
                  </ContentTitle>
                  <ContentDesc>
                    <p>Only In Theaters December 10</p>
                  </ContentDesc>
                </a>
                <p className="cta-links-container">
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="ticket">
                        GET TICKET
                      </a>
                    </span>
                  </span>
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="visit">
                        VISIT OFFICIAL SITE
                      </a>
                    </span>
                  </span>
                </p>
              </ContentDetail>
            </ContentBody>
          </Content>
        </div>
        <div>
          <div>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/hb_20cs_thekingsman_20186_1_622c477c.jpeg?region=0,0,2048,878&width=1536"
              alt=""
            />
          </div>
          <Content>
            <ContentBody>
              <ContentDetail>
                <a href="www.google.com">
                  <ContentTitle>
                    <p>THE KING'S MAN</p>
                  </ContentTitle>
                  <ContentDesc>
                    <p>In Theaters December 22, 2021</p>
                  </ContentDesc>
                </a>
                <p className="cta-links-container">
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="ticket">
                        GET TICKET
                      </a>
                    </span>
                  </span>
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="visit">
                        VISIT OFFICIAL SITE
                      </a>
                    </span>
                  </span>
                </p>
              </ContentDetail>
            </ContentBody>
          </Content>
        </div>
        <div>
          <div>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/hb_20cs_deathonthenile_19923_3_2bc45bc3.jpeg?region=0,0,2048,878&width=1536"
              alt=""
            />
          </div>
          <Content>
            <ContentBody>
              <ContentDetail>
                <a href="www.google.com">
                  <ContentTitle>
                    <p>DEATH ON THE NILE</p>
                  </ContentTitle>
                  <ContentDesc>
                    <p>In Theaters February 11, 2022</p>
                  </ContentDesc>
                </a>
                <p className="cta-links-container">
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="ticket">
                        GET TICKET
                      </a>
                    </span>
                  </span>
                  <span className="cta-item">
                    <span className="btn-container">
                      <a href="www.google.com" className="visit">
                        VISIT OFFICIAL SITE
                      </a>
                    </span>
                  </span>
                </p>
              </ContentDetail>
            </ContentBody>
          </Content>
        </div>
      </Slider>
    </Container>
  );
}

export default Slide;

const Span = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    #00000000 0%,
    #0000000a 16%,
    #00000021 29%,
    #00000042 41%,
    #0000006b 51%,
    #00000094 61%,
    #000000bd 70%,
    #000000de 79%,
    #000000f5 89%,
    #000000ff 100%
  );
`;

const Overlay = styled.div``;
const Content = styled.div`
  position: absolute;
  z-index: 1000;
  color: #fff;
  background-color: transparent;
  padding: 2.5rem 6.5rem;
  bottom: 30px;
`;
const ContentBody = styled.div`
  color: #fff;
  display: flex;
  justify-content: flex-start;
`;
const ContentDetail = styled.div`
  max-width: 100%;
  text-align: left;
  display: inline-block;
  height: auto;
  margin-top: 0;
  transition: opacity 250ms;
  user-select: none;
  a {
    text-decoration: none;
  }
  .btn-container a {
    padding: 13px 60px;
    margin-right: 15px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
  }
  .btn-container a.ticket {
    background-color: #907137;
    border: 1px solid #907137;
    color: #ffffff;
  }
  .btn-container a.visit {
    background-color: #fff;
    color: #000;
  }
`;
const ContentTitle = styled.div`
  color: rgba(255, 255, 255, 0.86);
  font-size: 46px;
  line-height: 46px;
  margin-bottom: 10px;
  p {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;
const ContentDesc = styled.div`
  color: rgba(255, 255, 255, 0.86);
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 16px;
  p {
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 76px;
  img {
    margin: 0 auto;
  }
  .slick-prev {
    left: 2%;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #ffffff7d;
  }
  .slick-next,
  .slick-prev {
    width: 45px;
    height: 45px;
    z-index: 3;
  }
  .slick-next {
    right: 2%;
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
  }
  .slick-dots {
    bottom: 0px;
  }
  .slick-dots li button {
    width: 40px;
    height: 5px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    background: #ffffffad;
    top: 0;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 0;
    line-height: 10px;
    position: absolute;
    top: 0;
    content: "";
  }
  .dyGuPO .slick-dots li button {
    width: 40px;
    height: 2px;
    padding: 3px;
    cursor: pointer;
    color: transparent;
    background: #00000030;
  }
  .slick-dots li {
    width: 40px;
  }
  .slick-dots li button {
    padding: 2px;
  }
  .slick-dots li.slick-active button {
    background: #907137;
  }
`;
