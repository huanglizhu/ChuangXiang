import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Avatar, Button } from 'antd';
import { PlusOutlined,SyncOutlined  } from '@ant-design/icons';
import { connect } from "react-redux";
import { actionCreators } from "../store";
import '../style.css';

class Writer extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <Row style={{ fontSize: "14px" }} gutter={[0, 14]}>
        <Col span={24} >
          <Row justify="space-between" style={{ color: "#a69999" }}>
            <Col>
              推荐作者
            </Col>
            <Col className="changeWriter">
              <SyncOutlined />换一批
            </Col>
          </Row>
        </Col>
        {list.map((item, index) => {
          return (
            <Col span={24} id={"writer"}>

              <Row justify="space-between" gutter={16} key={index} >
                <Col flex="0 1 48px" style={{ height: "50px" }}>
                  <Avatar size={48} src={item.get("imgUrl")} />
                </Col>
                <Col flex="1 1 60px">
                  <p className="writerName">{item.get("writerName")}</p>
                  <p>写了{item.get("totalNum")}k字 {item.get("totalLike")}k喜欢</p>
                </Col>
                <Col flex="0 1 50px" className="care" >
                <PlusOutlined />关注
            </Col>
              </Row>
            </Col>
          )
        })}

        <Col span={24}>
          <Button block>查看全部</Button>
        </Col>
      </Row>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "writerList"]),
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Writer);