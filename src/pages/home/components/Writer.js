import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { Avatar  } from 'antd';
import { UserOutlined,PlusOutlined } from '@ant-design/icons';
import '../style.css';

class Writer extends PureComponent {
  render() {
    return (
      <Row justify="space-between" style={{ fontSize: "14px" }}>
        <Col span={24}>
          <Row justify="space-between" style={{ color: "#a69999",paddingBottom:"18px" }}>
            <Col>
              推荐作者
            </Col>
            <Col>
              换一批
            </Col>
          </Row>
        </Col>
        <Col span={24} id={"writer"}>
          <Row justify="space-between" gutter={16}>
            <Col flex="0 1 48px" style={{ height: "50px" }}>
              <Avatar size={48} icon={<UserOutlined />} />
            </Col>
            <Col flex="1 1 60px">
              <p className="writerName">作者名字</p>
              <p>写了xxk字 xxk喜欢</p>
            </Col>
            <Col flex="0 1 50px" className="care" >
            <PlusOutlined />关注
            </Col>
          </Row>
        </Col>
      </Row>

    )
  }
}

export default Writer;