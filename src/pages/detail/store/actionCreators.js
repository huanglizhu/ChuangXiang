import axios from "axios";
import * as constants from "./constants";

const changeDetail = (title, content) => {
  return {
    type: constants.CHANGE_DETAIL,
    title,
    content
  }
};

export const getDetail = (id) => {
  return (dispatch) => {
    // axios.get("/api/detail.json?id=" + id).then((res) => {
    let getUrl = process.env.NODE_ENV === 'production' ? "/ChuangXiang/api/detail.json?id=" : "/api/detail.json?id=";
    axios.get(getUrl + id).then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content))
    }).catch(() => {
      return "获取详情页信息失败";
    })
  }
};

