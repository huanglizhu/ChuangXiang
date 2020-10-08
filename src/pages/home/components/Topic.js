import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
  TopicWrapper,
  TopicItem,
} from "../style"
import { Row, Col } from 'antd';

class Topic extends PureComponent {
  render() {
    return (
      <Row>
        <Col >
          <TopicWrapper>
            {
              this.props.list.map((item) => {
                return (
                  <TopicItem key={item.get("id")}>
                    <img
                      className="topic-pic"
                      src={item.get("imgUrl")}
                      alt={item.get("title")}
                    />
                    {item.get("title")}
                  </TopicItem>
                )
              })
            }
          </TopicWrapper>
        </Col>
      </Row>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "topicList"])
})

export default connect(mapState, null)(Topic);