import React, { Component } from "react";
import ReactTypes from "prop-types";
// 路由跳转
import history from "../history/history";
import store from "../redux/store";
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
  Pagination,
} from "antd";
const { Header, Content, Sider } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objs: props.location.state,
      reduxX: store.getState().reducer.count,
    };
  }
  static contextTypes = {
    zhi: ReactTypes.string,
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    // let key = nextProps.match.params.key;
    this.setState({
      objs: nextProps.location.state,
    });
  }
  reduxS = () => {
    console.log("点击了");
    store.dispatch({ type: "INCREASE" }); // {count: 1}
    console.log(store.getState());
    this.setState({
      reduxX: store.getState().reducer.count,
    });
  };
  onChange(a, b) {
    console.log(a, b);
    history.push("/movie" + "/" + a + "/" + a, "值哦");
    // window.location.href='/movie/'+a+'/'+a
  }

  render() {
    console.log("home", this);
    const { counter, dispatch, add, minus, asncAdd } = this.props;
    return (
      <div style={{ background: "#ECECEC", padding: "20px", height: "100%" }}>
        <Card title="首页" bordered={false} style={{ width: "100%" }}>
          <p>{counter}</p>
          <p onClick={this.reduxS}>{this.context.zhi}</p>
          <p>{this.state.reduxX}</p>
          <Pagination
            onChange={this.onChange}
            defaultCurrent={6}
            total={200}
            defaultCurrent={1}
            pageSize={20}
          ></Pagination>
          {this.state.objs ? (
            this.state.objs.data.map((item, index) => {
              return (
                <a
                  key={index}
                  style={{ margin: "20px 20px" }}
                  href={item.img}
                  target="_blank"
                >
                  {item.name}
                </a>
              );
            })
          ) : (
            <a>空</a>
          )}
          {/* <p>{this.props.location.state.toString()}</p> */}
        </Card>
      </div>
    );
  }
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
)(Home);
