import styled from "styled-components";

export const HomeLeft = styled.div`
  // margin-left: 15px;
  padding-top: 34px;
  .banner-img{
    width: auto;  
    height: auto;  
    max-width: 100%;  
    max-height: 100%;  
    border-radius: 8px;
  }
`;

export const TopicItem = styled.div`
  width:100%;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-top: 18px;
  cursor: pointer;
  .topic-pic{
    width: 32px;
    height: 32px;
    margin-right: 10px;
    float: left;
    border-radius: 4px;
  }
`;

export const ListItem = styled.div`
  display: flow-root;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    // float: right;    
    border-radius: 10px;
    width: 125px;
    height: 100px;
    // 使图片不变形
    object-fit: cover;
  }
`;

export const ListInfo = styled.div`
  // width: 100%;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  // width: 280px;
  width: 100%;
  min-height: 50px;
  background: url(${(props) => (props.imgUrl)});
  background-size: contain;
  margin-bottom: 6px;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  line-height: 300px;
  text-align: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 100px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`;