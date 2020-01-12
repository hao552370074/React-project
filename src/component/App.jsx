import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
// 路由跳转
import history from "../history/history";

import { api } from "../api";

import ReactTypes from "prop-types";

import Tests from "./test";
import appCsss from "../App.scss";

import { Button, Modal, Menu, Icon } from "antd";

import Input from "../component/Input";
import ThreeBim from "../component/three";

import Home from "../component/home";
import About from "../component/about";
import Movie from "../component/movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      num: 0,
      aa: "哈哈",
      kk: 0,
      childen: "等待儿子得信息",
      list: [
        {
          name: "张三",
          age: 18
        },
        {
          name: "李四",
          age: 14
        }
      ],
      collapsed: false,
      z: "我给儿子得值",
      nameList: [
        { name: "首页" },
        { name: "电影", lists: ["Top250", "经典电影"] },
        { name: "关于" }
      ]
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  btns = () => {
    this.setState({
      aa: "嘿嘿",
      kk: this.state.kk + 1
    });
    console.log(this.state.kk);
  };

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      num: e.target.value
    });
  }

  homePath = (i) => {
    console.log(i);
    if (i=='home') {
      history.push('/home','哈哈');
    }else if(i=='Top250'){
      history.push('/movie/1/2')
    }else{
      history.push('/about')
    }
    // let gzid = {
    //   xid: 6,
    //   uid: 11
    // };
    // api.get("/api/GetWeiBoUGuanList", gzid).then(res => {
    //   console.log(res);
    // });
  };

  getChildContext() {
    // console.log(this,'哈哈');
    return {
      zhi: this.state.z
    };
  }

  static childContextTypes = {
    zhi: ReactTypes.string
  };

  cancel(mode) {
    console.log(mode);
    this.setState({
      childen: mode
    });
  }

  componentWillMount() {
    // console.log(window.location.pathname.replace("/", ""));
    // console.log(document.querySelector('.div'), 1);
  }

  componentDidMount() {
    // console.log(document.querySelector('.div'), 2);
  }
  componentWillUpdate(a, b) {
    // console.log(document.querySelector('.div'),this.state, 1);
  }

  componentDidUpdate(a, b) {
    // console.log(document.querySelector('.div'), 2);
  }

  render() {
    const { SubMenu } = Menu;
    console.log(this, "看着");
    const { visible, loading } = this.state;
    return (
      <div>
        <div style={{ width: 256, float: "left" }}>
          {/* <Button
              type="primary"
              onClick={this.toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
            </Button> */}
          <Menu
            defaultSelectedKeys={[window.location.pathname.replace("/", "")]||['home']}
            defaultOpenKeys={["sub2"]}
            mode="inline"
            className="home"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>电影专区</span>
                </span>
              }
            >
              {/* {this.state.nameList.map((res, index) => {
                return (
                  <SubMenu key={index} title={res.name}>
                    {(res.lists || []).map((item, k) => {
                      if (item) {
                        return <Menu.Item key={k}>{item}</Menu.Item>;
                      }
                    })}
                  </SubMenu>
                );
              })} */}
              <Menu.Item key="home" onClick={()=>this.homePath('home')}>
                首页
              </Menu.Item>
              <SubMenu key="sub3" title="电影">
                <Menu.Item key="movie" onClick={()=>this.homePath('Top250')}>
                {/* <Link to="/movie/Top250/99">Top250</Link> */}
                Top250
                </Menu.Item>
              </SubMenu>
                <Menu.Item key="about" onClick={()=>this.homePath('about')}>
              {/* <Link to="/about">关于</Link> */}
              关于
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div style={{ float: "left" }}>
          <Route path="/home" component={Home}></Route>
          <Route path="/movie/:type/:id" exact component={Movie}></Route>
          <Route path="/about" component={About}></Route>
        </div>

        {/* <a href="#" className='a'><p>哈哈</p></a> */}
        {/* <div className="div">
          这是text测试jsx格式{this.state.aa}
          <button className={appCsss.a} onClick={() => this.btns()}>
            点我
          </button>
          <br />
          <Button type="primary">Primary</Button>
          <Input cancel={mode => this.cancel(mode)}></Input>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.num}
          ></input>
          <Tests initcount={this.state.kk}></Tests>
          <Button type="primary">{this.state.childen}</Button>
          <Button type="warning" onClick={this.showModal}>
            Open Modal with customized footer
          </Button>
          <Modal
            visible={visible}
            title="Title"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[
              <Button key="back" type="danger" onClick={this.handleCancel}>
                关闭
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={loading}
                onClick={this.handleOk}
              >
                确定
              </Button>
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
          {this.state.list.map((item, i) => {
            return <ThreeBim key={i} {...item}></ThreeBim>;
          })}
        </div> */}
      </div>
    );
  }
}
export default App;
