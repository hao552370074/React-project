import React, { Component } from "react";
import { add, minus, asncAdd } from "../test-redux/reactReduxPage";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  Menu,
  Icon,
  Tooltip,
  Card,
  Col,
  Row,
  Layout,
} from "antd";
const { Header, Content, Sider } = Layout;
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { counter, dispatch, add, minus, asncAdd } = this.props;
    return (
      <div style={{ background: "#ECECEC", padding: "20px", height: "100%" }}>
        <Card title="关于" bordered={false} style={{ width: "100%" }}>
          {this.props.location.pathname}
          <p>{counter}</p>
          {/* <button onClick={() => dispatch({ type: "add" })}>add</button> */}
          <button onClick={add}>add</button>
          <button onClick={asncAdd}>asncAdd</button>
        </Card>
        {/* <button onClick={minus}>minus</button> */}
      </div>
    );
  }
  componentWillMount(a, b) {
    console.log(a, b);
  }
  // componentWillReceive
}

//connect是高阶函数
export default connect(
  //mapStateToProps
  (state) => state,
  //mapDispatchToProps
  {
    add,
    minus,
    asncAdd,
  }
)(About);
