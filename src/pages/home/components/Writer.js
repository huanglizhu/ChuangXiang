import React, { PureComponent } from 'react';
// import { WriterWrapper } from "../style";
import { Row, Col } from 'antd';

class Writer extends PureComponent {
  render() {
    return (
      // <WriterWrapper>Writer~</WriterWrapper>
      <Row justify="space-between" >
        <Col>
          推荐作者
        </Col>
        <Col>
          换一批
        </Col>
      </Row>

    )
  }
}

export default Writer;