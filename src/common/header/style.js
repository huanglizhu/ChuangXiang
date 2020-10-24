import styled from "styled-components";
import LogoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  z-index: 1;
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
  // 等比例缩放
  width:auto;
  height:56px;
  background:url(${LogoPic});
  // contain：把x轴拉满，y轴够长的话会平铺重复显示图片
  background-size:contain;
  background-repeat: no-repeat;
  // 背景定位居中
  background-position:50% 50%;
  
`;

export const Nav = styled.div`
  width:960px;
  height:100%;
  margin: 0 auto;
  box-sizing:border-box;
  padding-right: 70px;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding-right:15px;
  font-size: 17px;
  color: #333;
  &.right{
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  // width: 160px;
  width: 40%;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder{
    color: #999;    
  }
  &.focused{
    // width:240px;
    width:80%;
  }
  // 入场动画
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    // width:240px;
    width:80%;
  }
  // 出场动画
  &.slide-exit{
    transition: all .2s ease-out;
  }
  .slide-exit-active{
    // width:160px;
    width:40%;
  }
`;

export const Addition = styled.div`
  height:56px;
`;

export const Button = styled.div`
  float:right;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`;

export const SearchWrapper = styled.div`
width:100%;
  position: relative;
  float:left;
  .zoom{
    position: absolute;
    // right:5px;
    right:61%;
    bottom:5px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    &.focused{
      background: #777;
      color: #fff;
    right:21%;
    }
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  // width: 240px; 
  width: 80%; 
  padding:0 20px;
  box-shadow:0 0 8px rgba(0, 0, 0, .2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.div`
  float:right;
  font-size: 13px;
  cursor: pointer;
  .spin{
    font-size: 12px;
    margin-right: 2px;
    display: block;
    float: left;
    transition: all .2s ease-in;
  }
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

export const SearchItemList = styled.div`
  overflow: hidden;
`;