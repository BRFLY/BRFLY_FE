import styled from "styled-components";
import Navbar from "../components/Navbar";
import KakaoLogin from "../components/KakaoLogin";

const Home = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Title>Near by</Title>
        <KakaoLogin />
      </Body>
    </>
  );
};
export default Home;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
`;

const Body = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: "inline-block";
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
