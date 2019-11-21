// day1 - ScrollBox(Ref) -------------------------------------------
// import React, { Component } from "react";
// import ScrollBox from "./day1/ref1_ScrollBox";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={ref => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           {/* () => this.scrollBox.scrollToBottom() 으로 해야된다.
//           만약, this.scrollBox.scrollToBottom으로 하면 에러발생 */}
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// day1-LifeCycle ---------------------------------------------------------
// import React, { Component } from "react";
// import LifeCycleSample from "./day1/LifeCycleSample";

// // 랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: "#000000"
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor()
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <LifeCycleSample color={this.state.color} />
//       </div>
//     );
//   }
// }

// export default App;

// day1- CSS Module --------------------------------------------
import React, { Component } from "react";
import RenderCallbackMenu from "./day2/RenderCallback";

class App extends Component {
  render() {
    return (
      <div>
        <RenderCallbackMenu title="First Menu">
          <p>Some contnet</p>
        </RenderCallbackMenu>
        <RenderCallbackMenu title="Second Menu">
          <p>Some contnet</p>
        </RenderCallbackMenu>
        <RenderCallbackMenu title="Third Menu">
          <p>Some contnet</p>
        </RenderCallbackMenu>
      </div>
    );
  }
}

export default App;
