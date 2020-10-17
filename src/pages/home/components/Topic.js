import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
  TopicItem,
} from "../style"
import { Row, Col   } from 'antd';

class Topic extends PureComponent {
  render() {
    return (
      <Row justify="space-between" gutter={{ md: 24}}>
          {
            this.props.list.map((item) => {
              return (
                <Col md={4} >
                  <TopicItem key={item.get("id")}>
                    <img
                      className="topic-pic"
                      src={item.get("imgUrl")}
                      alt={item.get("title")}
                    />
                    {item.get("title")}
                  </TopicItem>
                </Col>
              )
            })
          }
      </Row>
      
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "topicList"])
})

export default connect(mapState, null)(Topic);