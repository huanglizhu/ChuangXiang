import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Header,
  Content,
} from "./style";
import { actionCreators } from './store';
import { Row, Col } from 'antd';

class Detail extends PureComponent {
  render() {
    return (
      <Row justify="center" style={{paddingBottom:"100px"}}>
        <Col xs={22} md={12}>
          <Header>{this.props.title}</Header>
          <Content dangerouslySetInnerHTML={{ __html: this.props.content }}></Content>
        </Col>
      </Row>
    )
  };

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  };
}

const mapStore = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
});

const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  },
});

export default connect(mapStore, mapDispatch)(withRouter(Detail));