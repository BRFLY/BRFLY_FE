import React, { useState } from "react";
import styled from "styled-components";

const Memo = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    setMessage(inputValue);
    setInputValue(""); // 입력 필드를 비웁니다.
  };

  return (
    <Body>
      <Msg>{message}</Msg>
      <InputWrapper>
        <Input
          placeholder="기사를 요약해서 정리해보세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        <InputBtn onClick={handleButtonClick}>입력</InputBtn>
      </InputWrapper>
    </Body>
  );
};

export default Memo;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
  border: 2px solid black;
  width: 380px;
  border-radius: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 300px;
  align-items: center;
  border-top: 1px solid #ccc;
  overflow-y: auto; /* 메시지가 넘칠 경우 스크롤 가능하게 설정 */
`;

const Input = styled.input`
  width: 280px; /* 버튼을 포함하도록 너비를 조정 */
  height: 60px;
  padding: 10px;
  border: none;
  margin-right: 10px; /* 버튼과의 간격 조정 */
`;

const Msg = styled.div`
  width: 340px;
  height: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
`;

const InputBtn = styled.button`
  width: 80px;
  height: 30px;
  padding: 20px;
  font-size: 15px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
