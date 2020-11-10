import { constants } from "../store";
import axios from "axios";
import { fromJS } from "immutable";

const changeList = (data) => ({
  type: constants.CHANG_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});

export const getList = () => {
  return (dispatch) => {
    // let getUrl="/api/headerList.json";
    // if(process.env.NODE_ENV === 'production'){
    //   getUrl="/ChuangXiang/api/headerList.json"
    // }
    // axios.get(getUrl).then((res) => {
    let getUrl = process.env.NODE_ENV === 'production' ? "/ChuangXiang/api/headerList.json" : "/api/headerList.json";
    axios.get(getUrl).then((res) => {
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log("error");
    });
  };
};

