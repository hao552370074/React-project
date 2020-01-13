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
    this.state = {
      objs:props.location.state,
    };
  }
  static contextTypes = {
    zhi: ReactTypes.string
  };
  render() {
    console.log('home',this);
    
    return (
      <div style={{ background: "#ECECEC", padding: "20px",height:"100%" }}>
        <Card title="首页" bordered={false} style={{ width: "100%" }}>
          <p>{this.context.zhi}</p>
          {this.state.objs.map((item,index)=>{
            return <a key={index} style={{margin:"20px 20px",}} href={item.img} target="_blank">{item.title}</a>
          })}
          {/* <p>{this.props.location.state.toString()}</p> */}
        </Card>
      </div>
    );
  }
}

export default Home;
