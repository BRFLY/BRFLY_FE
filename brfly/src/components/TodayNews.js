import React from "react";
import styled from "styled-components";

const TodayNews = () => {
  return (
    <Container>
      <Title>ARTICLE</Title>
      <Body>
        <ArticleBox>
          <Category>
            <Circle />
            <Categoryname>경제</Categoryname>
          </Category>
          <NewsTitle>집값 상승세 확산. 서울 주택사업 체감경기 '맑음'</NewsTitle>
          <Description>
            주택산업연구원 설문결과, 서울 7.1p 상승, 인천·경기는 하락.
            자재수급지수·자금조달지수 동반 상승 자재수급지수·자금조달지수 동반
            상승
          </Description>
        </ArticleBox>
        <ArticleBox>
          <Category>
            <Circle1 />
            <Categoryname>사회</Categoryname>
          </Category>
          <NewsTitle>집값 상승세 확산. 서울 주택사업 체감경기 '맑음'</NewsTitle>
          <Description>
            주택산업연구원 설문결과, 서울 7.1p 상승, 인천·경기는 하락.
            자재수급지수·자금조달지수 동반 상승 자재수급지수·자금조달지수 동반
            상승
          </Description>
        </ArticleBox>
        <ArticleBox>
          <Category>
            <Circle2 />
            <Categoryname>취준</Categoryname>
          </Category>
          <NewsTitle>집값 상승세 확산. 서울 주택사업 체감경기 '맑음'</NewsTitle>
          <Description>
            주택산업연구원 설문결과, 서울 7.1p 상승, 인천·경기는 하락.
            자재수급지수·자금조달지수 동반 상승 자재수급지수·자금조달지수 동반
            상승
          </Description>
        </ArticleBox>
      </Body>
    </Container>
  );
};
export default TodayNews;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  border: 2px solid black;
  width: 380px;
  border-radius: 5px;
  height: 450px;
`;

const Title = styled.span`
  font-size: 24px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-top: 70px;
`;

const Container = styled.span`
  display: flex;
  flex-direction: column;
`;

const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 10px;
  cursor: pointer;
`;

const Circle = styled.div`
  border-radius: 100%;
  width: 9.5px;
  height: 9.5px;
  background-color: #92e5ff;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Categoryname = styled.span`
  color: #bfbfbf;
  margin: 0 10px;
  font-weight: 700;
`;

const NewsTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  margin: 7px 0;
`;

const Description = styled.span`
  font-size: 15px;
  margin: 5px 0;
`;

const Circle1 = styled(Circle)`
  background-color: #52ff00;
`;
const Circle2 = styled(Circle)`
  background-color: #60ffcf;
`;
