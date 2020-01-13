import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routerParams: props.match.params
    };
  }
  render() {
    console.log(this, "看这里");
    return (
      <div>
        这里是电影
        <br></br>
        {/* {this.state.routerParams.type} */}
        路由:{this.props.match.params.type}-{this.props.match.params.id}
      </div>
    );
  }
  componentWillMount(){
    // console.log(window.location);
  }
}

export default Movie;
