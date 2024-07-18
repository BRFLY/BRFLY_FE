import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/images/brfly.svg";
const Navbar = () => {
  return (
    <Bar>
      <LogoContainer>
        <Link to="/">
          <Logo src={logo} />
        </Link>
      </LogoContainer>
      <Container>
        <Link to="/calendar" style={{ textDecoration: "none" }}>
          <CalendarBtn>캘린더</CalendarBtn>
        </Link>
        <Link to="/news" style={{ textDecoration: "none" }}>
          <NewsBtn>전체 기사</NewsBtn>
        </Link>
      </Container>
    </Bar>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: white !important;
  width: 20%;
  margin-right: 100px;
`;

const CalendarBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  font-size: 20px;
`;

const NewsBtn = styled(CalendarBtn)``;
const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 800px;
  width: 80%;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 2px solid black;
  width: 100%;
  padding: 25px;
`;

export default Navbar;
