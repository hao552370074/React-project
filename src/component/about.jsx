import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this);

    return (
      <div>
        这里是关于
        {this.props.location.path}
        
      </div>
    );
  }
}

export default About;
