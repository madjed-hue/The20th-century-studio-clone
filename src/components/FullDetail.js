import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
function FullDetail({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  const {
    backdrop_path,
    status,
    poster_path,
    title,
    release_date,
    overview,
    homepage,
    vote_average,
  } = movie;

  return (
    <Content>
      <Heading>
        <img src={`${base_url}${backdrop_path}`} alt="" />
        <div className="content">
          <h2>{status}</h2>
          <a href="/">
            <PlayArrowIcon />
            <span>Watch Trailer</span>
          </a>
        </div>
      </Heading>
      <Body>
        <Image>
          <img src={`${base_url}${poster_path}`} alt="" />
        </Image>
        <FullDetails>
          <h1>{title}</h1>
          <p>{release_date}</p>
          <p>{overview}</p>
          <Social>
            <ul>
              <li>
                <a href="/">
                  <FacebookIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="/">
                  <InstagramIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="/">
                  <TwitterIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </Social>
          <div>
            <a href={homepage} target="_blank" rel="noreferrer">
              Home Page
            </a>
          </div>
          <h3>Production Companies</h3>
          <div id="logo-img"></div>

          <div className="vote">
            <p>Vote : {vote_average}</p>
          </div>
          <h3>Genres</h3>
          <div id="movie-genres"></div>
        </FullDetails>
      </Body>
    </Content>
  );
}

export default FullDetail;

const Content = styled.div``;
const Heading = styled.div`
  margin: 0 auto;
  position: relative;
  width: 83%;
  margin-top: 76px;
  img {
    width: 100%;
  }
  .content {
    position: absolute;
    bottom: 50px;
    left: 35%;
    transform: translate(50%, -50%);
    color: #fff;
    text-align: center;
  }
  .content h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .content a {
    text-decoration: none;
    color: #000;
    background-color: #fff;
    margin: 10px auto;
    border-radius: 4px;
    padding: 10px 60px;
    border: 1px solid #fff;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .content a:hover {
    background-color: #83642e;
    border: 1px solid #83642e;
  }
  .content a span {
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
  }
`;
const Body = styled.div`
  width: 70%;
  display: flex;
  margin: 30px auto;
`;
const Image = styled.div`
  width: 50%;
  img {
    width: -webkit-fill-available;
  }
`;
const FullDetails = styled.div`
  margin-left: 40px;
  h1 {
    text-transform: uppercase;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
  p {
    margin-bottom: 15px;
    color: rgba(29, 30, 31, 0.8);
  }
  #logo-img {
    display: flex;
    overflow: hidden;
    margin: 0 10px;
    max-width: 100%;
    flex-wrap: wrap;
  }
  .comapnyImage {
    max-width: 12%;
    height: 70px;
    margin-right: 10px;
    object-fit: contain;
    flex-wrap: wrap;
  }
  .non {
    display: none;
  }
  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 10px 0;
    transition: all 0.5s;
  }
  a:hover {
    color: #83642e;
  }
  .vote {
    margin-top: 15px;
    p {
      font-weight: bold;
    }
  }
  h3 {
    margin: 10px 0;
  }
  #movie-genres {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h4 {
      margin-right: 10px;
    }
  }
`;
const Social = styled.div`
  ul {
    list-style: none;
    display: flex;
  }
  ul li:not(:first-child) {
    margin: 15px 25px;
  }
  ul li:first-child {
    margin: 15px 0;
  }
  ul li a {
    text-decoration: none;
    color: #000;
    font-size: 18px;
  }
`;
