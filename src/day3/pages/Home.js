import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      <h1>홈</h1>
      <button
        onClick={() => {
          history.push("/about/javascript");
        }}
      >
        자바스크립트를 사용하여 이동
      </button>
    </div>
  );
};

export default Home;
