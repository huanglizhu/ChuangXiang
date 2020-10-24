import React, { PureComponent } from 'react';
import {
  HomeLeft,
  BackTop,
  homeWrapper,
  homeRight,
} from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Row, Col } from 'antd';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Row justify="center">
        <Col flex="0 1 1248px">
          <Row style={homeWrapper} justify="center" >
            <Col xs={{ span: 22 }} md={{ span: 12 }}>
              <HomeLeft>
                <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner图片" />
                <Topic></Topic>
                <List></List>
              </HomeLeft>
            </Col>
            <Col xs={0} md={{ span: 6, offset: 1 }} style={homeRight}>
              <Recommend></Recommend>
              <Writer></Writer>
            </Col>
            {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop> : null}
          </Row>
        </Col>
      </Row>

    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(["home", "showScroll"])
})

const mapDisoatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDisoatch)(Home);