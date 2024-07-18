import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Navbar>
      <Link to="/"></Link>
      <Container>
        <Link to="/calendar" style={{ textDecoration: "none" }}>
          <CalendarBtn>calendar</CalendarBtn>
        </Link>
        <Link to="/news" style={{ textDecoration: "none" }}>
          <NewsBtn>news</NewsBtn>
        </Link>
      </Container>
    </Navbar>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  background-color: white !important;
  padding: 25px;
  width: 100%;
  border-bottom: 2px solid black;
`;

const CalendarBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-right: 60px;
`;

const NewsBtn = styled(CalendarBtn)``;
const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 61px;
  height: auto;
`;

export default Navbar;
