import React from "react";
import styled from "styled-components";
import ReactCalendar from "../components/ReactCalendar";
import Navbar from "../components/Navbar";
import TodayNews from "../components/TodayNews";

const Calendar = () => {
  return (
    <Mainpage>
      <Navbar />
      <Container>
        <CalendarBox>
          <ReactCalendar />
          <TodayNews />
        </CalendarBox>
      </Container>
    </Mainpage>
  );
};

export default Calendar;

const Mainpage = styled.div`
  background-color: #f3f3f3 !important;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
