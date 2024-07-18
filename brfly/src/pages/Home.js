import styled from "styled-components";
import Navbar from "../components/Navbar";
import KakaoLogin from "../components/KakaoLogin";
import main from "../assets/images/main.svg";

const Home = () => {
  return (
    <>
      <Body>
        <KakaoLogin />
      </Body>
    </>
  );
};
export default Home;

const Body = styled.div`
  background: url(${main}) no-repeat center;
  background-size: cover;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: inline-block;
  }
  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  h2 {
    color: #ffa07a;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  p {
    color: white;
    font-size: 1.1rem;
  }
`;
