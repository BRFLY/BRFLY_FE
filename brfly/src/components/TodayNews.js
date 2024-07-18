import React, { useState } from "react";
import styled from "styled-components";
import { Toggle } from "./Toggle"; // Toggle 컴포넌트를 가져옵니다.
import Memo from "./Memo"; // Memo 컴포넌트를 가져옵니다.

const TodayNews = () => {
  const [isMemo, setIsMemo] = useState(false); // isMemo 상태를 추가합니다.

  const handleToggle = () => {
    setIsMemo(!isMemo); // 토글 버튼 클릭 시 isMemo 상태를 변경합니다.
  };

  return (
    <Container>
      <SemiBox>
        <Title>{isMemo ? "MEMO" : "ARTICLE"}</Title>{" "}
        {/* 상태에 따라 제목 변경 */}
        <Toggle isOn={isMemo} toggleHandler={handleToggle} />{" "}
        {/* 토글 버튼 클릭 시 handleToggle 함수 호출 */}
      </SemiBox>
      <BodyContainer>
        {isMemo ? (
          <Memo /> // isMemo가 true면 Memo 컴포넌트를 렌더링
        ) : (
          <Body>
            <ArticleBox>
              <Category>
                <Circle />
                <Categoryname>경제</Categoryname>
              </Category>
              <NewsTitle>
                집값 상승세 확산. 서울 주택사업 체감경기 '맑음'
              </NewsTitle>
              <Description>
                주택산업연구원 설문결과, 서울 7.1p 상승, 인천·경기는 하락.
                자재수급지수·자금조달지수 동반 상승 자재수급지수·자금조달지수
                동반 상승
              </Description>
            </ArticleBox>
            <ArticleBox>
              <Category>
                <Circle1 />
                <Categoryname>사회</Categoryname>
              </Category>
              <NewsTitle>
                집값 상승세 확산. 서울 주택사업 체감경기 '맑음'
              </NewsTitle>
              <Description>
                주택산업연구원 설문결과, 서울 7.1p 상승, 인천·경기는 하락.
                자재수급지수·자금조달지수 동반 상승 자재수급지수·자금조달지수
                동반 상승
              </Description>
            </ArticleBox>
            <ArticleBox>
              <Category>
                <Circle2 />
                <Categoryname>취준</Categoryname>
              </Category>
              <NewsTitle>
                집값 상승세 확산. 서울 주택사업 체감경기 '맑음'
              </NewsTitle>
              <Description>
                주택산업연구원 설문결과, 서울 7.1p 상승, 인천·경기는 하락.
                자재수급지수·자금조달지수 동반 상승 자재수급지수·자금조달지수
                동반 상승
              </Description>
            </ArticleBox>
          </Body>
        )}
      </BodyContainer>
    </Container>
  );
};
export default TodayNews;

const BodyContainer = styled.div`
  overflow: auto;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  border: 2px solid black;
  width: 380px;
  border-radius: 5px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-top: 70px;
`;

const Container = styled.div`
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

const SemiBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
