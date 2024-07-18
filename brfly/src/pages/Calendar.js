import React from "react";
import styled from "styled-components";
import ReactCalendar from "../components/ReactCalendar";
import Navbar from "../components/Navbar";
import Newsbtn from "../assets/images/newsbtn.svg";
import TodayNews from "../components/TodayNews";
import { Link } from "react-router-dom";

const Calendar = () => {
  return (
    <Mainpage>
      <Navbar />
      <Container>
        <CalendarBox>
          <ReactCalendar />
          <NewsSection>
            <TodayNews />
            <Link to="/news">
              <NewsBtn src={Newsbtn} />
            </Link>
          </NewsSection>
        </CalendarBox>
      </Container>
    </Mainpage>
  );
};

export default Calendar;

const Mainpage = styled.div``;
const NewsBtn = styled.img`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: flex-end;
  cursor: pointer;
  width: 250px;
  height: auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  top: 65px;
  left: 0;
  position: fixed;
  width: 100%;
  margin-top: 50px;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 30px;
`;

const NewsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
