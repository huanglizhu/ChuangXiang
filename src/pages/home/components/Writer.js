import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Avatar, Button } from 'antd';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { WriterItem,WriterName,WriterWrapper } from "../style"

class Writer extends PureComponent {
  render() {
    const { writerList, writerPage, totalWriterPage, handleChangeWriterPage } = this.props;// 不能是list，要改成当页pageList
    // list是immutable数组，难以操作，使用toJS()转换为普通数组
    const newList = writerList.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (writerPage - 1) * 5; i < writerPage * 5; i++) {
        pageList.push(
          newList[i]
        )
      }
    }

    return (
      <WriterWrapper>
      <Row gutter={[0, 14]}>
        <Col span={24} >
          <Row justify="space-between" className="recommendWriter">
            <Col>
              推荐作者
            </Col>
            <Col className="changeWriter" onClick={() => { handleChangeWriterPage(totalWriterPage, writerPage, this.spin) }}>
              <SyncOutlined ref={(icon) => { this.spin = icon }} className="spin" />换一批
            </Col>
          </Row>
        </Col>
        {pageList.map((item, index) => {
          return (
            <Col span={24}>
            <WriterItem>
              <Row justify="space-between" gutter={16} key={index} >
                <Col flex="0 1 48px" style={{ height: "50px" }}>
                  <Avatar size={48} src={item.imgUrl} />
                </Col>
                <Col flex="1 1 60px">
                  <WriterName>{item.writerName}</WriterName>
                  <p>写了{item.totalNum}k字 {item.totalLike}k喜欢</p>
                </Col>
                <Col flex="0 1 50px" className="care" >
                  <PlusOutlined />关注
            </Col>
              </Row>
            </WriterItem>
            </Col>
          )
        })}

        <Col span={24}>
          <Button block>查看全部</Button>
        </Col>
      </Row>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  writerList: state.getIn(["home", "writerList"]),
  writerPage: state.getIn(["home", "writerPage"]),
  totalWriterPage: state.getIn(["home", "totalWriterPage"]),
})

const mapDispatch = (dispatch) => ({
  handleChangeWriterPage(totalWriterPage, writerPage, spin) {
    // [^0-9]匹配所有非数字字符（i不区分大小写)
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, "");
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {// 如无则给初始角度0
      originAngle = 0;
    }
    // 第一次点击360度，第二次720度...配合transition实现动画效果
    spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

    if (writerPage < totalWriterPage) {
      dispatch(actionCreators.changeWriterPage(writerPage + 1));
    } else {
      dispatch(actionCreators.changeWriterPage(1));
    }
  }
})

export default connect(mapState, mapDispatch)(Writer);