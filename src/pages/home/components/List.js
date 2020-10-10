import React, { PureComponent, Fragment } from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore,
} from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={"/detail/" + item.get("id")}>
                <ListItem>
                  <Row>
                    <Col xs={24} md={19}>
                      <ListInfo>
                        <h3 className="title">{item.get("title")}</h3>
                        <p className="desc">{item.get("desc")}</p>
                      </ListInfo>
                    </Col>
                    <Col xs={0} md={5}>
                      <img
                        className="pic"
                        src={item.get("imgUrl")}
                        alt={item.get("title")}
                      />
                    </Col>
                  </Row>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多</LoadMore>

      </Fragment>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home", "articleList"]),
  page: state.getIn(["home", "articlePage"])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapState, mapDispatch)(List);