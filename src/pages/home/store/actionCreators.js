import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList,
  totalWriterPage: Math.ceil(result.writerList.length / 5)
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    // axios.get("/api/home.json").then((res) => {
    let getUrl = process.env.NODE_ENV === 'production' ? "/ChuangXiang/api/home.json" : "/api/home.json";
    axios.get(getUrl).then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    // axios.get("/api/homeList.json?page=" + page).then((res) => {
    let getUrl = process.env.NODE_ENV === 'production' ? "/ChuangXiang/api/homeList.json?page=" : "/api/homeList.json?page=";
    axios.get(getUrl + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})

export const changeWriterPage = (writerPage) => ({
  type: constants.CHANGE_WRITER_PAGE,
  writerPage
});