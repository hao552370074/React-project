import React, { Component } from "react";
import ReactTypes from "prop-types";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextTypes = {
    zhi: ReactTypes.string
  };
  render() {
    return (
      <div>
        这里是首页
        <p>{this.context.zhi}</p>
        <p>{this.props.location.state}</p>
      </div>
    );
  }
}

export default Home;
