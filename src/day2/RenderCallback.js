import React from "react";

class RenderCallback extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { show: false };
  }
  toggle() {
    this.setState(prevState => ({ show: !prevState.show }));
  }
  render() {
    return this.props.children(this.state.show, this.toggle);
  }
}

const RenderCallbackMenu = props => (
  <RenderCallback>
    {(show, onClick) => (
      <div>
        <div onClick={onClick}>
          <h1>{props.title}</h1>
        </div>
        {show && props.children}
      </div>
    )}
  </RenderCallback>
);

export default RenderCallbackMenu;
