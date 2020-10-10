import React, { PureComponent } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col } from 'antd';

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <Row style={{ paddingTop: "56px" }}>
          <Col xs={22} md={{ span: 12, offset: 3 }}>
            <div>这是写文章的页面</div>
          </Col>
        </Row>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"])
})

export default connect(mapState, null)(Write);