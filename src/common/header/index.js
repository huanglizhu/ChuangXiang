// eslint-disable-next-line
import React, { Component } from 'react'
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from "../../pages/login/store";
import { CSSTransition } from 'react-transition-group';
import {
  // HeaderWrapper,
  Logo,
  // Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchItemList,
} from "./style";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { yellow } from 'color-name';

class Header extends Component {
  getListArea() {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    // list是immutable数组，难以操作，使用toJS()转换为普通数组
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => { handleChangePage(totalPage, page, this.spin) }}>
              <span
                ref={(icon) => { this.spin = icon }}
                className="iconfont spin">
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchItemList>{pageList}</SearchItemList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focused, list, login, handleInputFocus, handleInputBlur, logout } = this.props;
    // 缩小屏幕后显示的菜单栏
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/">
            <a target="_blank" rel="noopener noreferrer" href="/">
              返回首页
          </a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            下载App
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            注册
          </a>
        </Menu.Item>
        <Menu.Item>
          {
            login ? <a target="_blank" rel="noopener noreferrer" href="/" onClick={logout}>退出</a> :
              <Link to="/login"><a target="_blank" rel="noopener noreferrer" href="/">
                登录
            </a></Link>
          }
        </Menu.Item>
        <Menu.Item danger><Link to="/write">写文章</Link></Menu.Item>
      </Menu>
    );

    return (
      <Row align="middle" justify="space-between" style={{ position: "fixed", zIndex: 1, height: "56px", width: "100%", borderBottom: "1px solid #f0f0f0", background: "white" }}>
        <Col xs={4} md={2}>
          <Link to="/">
            <Logo />
          </Link>
        </Col>
        <Col xs={0} md={{ span: 1, offset: 1 }}>
          <Link to="/">
            <NavItem className="active">首页</NavItem>
          </Link>
        </Col>
        <Col xs={0} md={{ span: 2 }}>
          <NavItem>下载App</NavItem>
        </Col>
        <Col xs={18} md={9}>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe606;
              </span>
            {this.getListArea()}
          </SearchWrapper>
        </Col>
        <Col xs={0} md={1}>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
        </Col>
        <Col xs={0} md={3}>
          {
            login ? <NavItem className="right" onClick={logout}>退出</NavItem> :
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
        </Col>
        <Col xs={0} md={4} >
          <Addition>
            <Link to="/write">
              <Button className="writting">
                <span className="iconfont">&#xe6e5;</span>
                写文章
            </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </Col>
        <Col xs={2} md={0} >
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <MenuOutlined />
            </a>
          </Dropdown>
        </Col>


      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"]),
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(totalPage, page, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreators.logout());
    },
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Header);