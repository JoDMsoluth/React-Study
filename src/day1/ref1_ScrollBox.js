// ref를 사용해야 할 때
// • 특정 input에 포커스 주기
// • 스크롤 박스 조작하기
// • Canvas 요소에 그림 그리기 등

/* <input ref={(ref) => {this.input=ref}}></input> */

import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    // • scrollTop: 세로 스크롤바 위치(0~350)
    // • scrollHeight: 스크롤 박스 내부의 높이(650)
    // • clientHeight: 스크롤 박스 외부의 높이(300)

    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative"
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)"
    };

    return (
      <div
        style={style}
        ref={ref => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;
