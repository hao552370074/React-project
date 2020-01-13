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
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "20px", height: "100%" }}>
        <Card title="关于" bordered={false} style={{ width: "100%" }}>
          {this.props.location.pathname}
        </Card>
      </div>
    );
  }
  componentWillMount(a,b){
    console.log(a,b);
    
  }
  // componentWillReceive
}

export default About;
