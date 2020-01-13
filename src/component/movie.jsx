import React, { Component } from "react";
import {
  Button,
  Modal,
  Menu,
  Icon,
  Tooltip,
  Card,
  Col,
  Row,
  Layout
} from "antd";
const { Header, Content, Sider } = Layout;
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
      <div style={{ background: "#ECECEC", padding: "20px", height: "100%" }}>
        <Card title="电影" bordered={false} style={{ width: "100%" }}>
          这里是电影
          <br></br>
          {/* {this.state.routerParams.type} */}
          路由:{this.props.match.params.type}-{this.props.match.params.id}
        </Card>
      </div>
    );
  }
  componentWillMount() {
    // console.log(window.location);
  }
}

export default Movie;
