import React, { Component } from "react";
import ReactTypes from "prop-types";
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
      <div style={{ background: "#ECECEC", padding: "20px",height:"100%" }}>
        <Card title="首页" bordered={false} style={{ width: "100%" }}>
          <p>{this.context.zhi}</p>
          <p>{this.props.location.state}</p>
        </Card>
      </div>
    );
  }
}

export default Home;
