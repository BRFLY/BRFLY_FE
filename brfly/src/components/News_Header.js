import React from "react";
import "../css/App.css";

const Header = () => {
  return (
    <header className="title">
      <div className="white-blank"></div>
      <div>
        <h1 style={{ fontFamily: "Libre Caslon Text, serif" }}>brfly</h1>{" "}
        {/*jsx의 html 코드에 다이렉트로 css 적용하는 법.
         */}
        <p>오늘 하루, '간결히' 뉴스로 돌아보는 시간</p>
      </div>
    </header>
  );
};

export default Header;
