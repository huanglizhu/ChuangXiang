import axios from "axios";
import * as constants from "./constants";

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const login = (account, password) => {
  return (dispatch) => {
    let getUrl = process.env.NODE_ENV === 'production' ? "/ChuangXiang/api/login.json?account=" : "/api/login.json?account=";
    axios.get(getUrl + account + "&password" + password).then((res) => {
    // axios.get("/api/login.json?account=" + account + "&password" + password).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());

      } else {
        alert("登录失败");
      }
    })
  }
}

export const logout = () => {
  return ({
    type: constants.LOGOUT,
    value: false
  })
}