import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import store from "./store";
import { Globalstyle } from './style';
import { GlobalIconFontStyle } from "./statics/iconfont/iconfont";

import './App.less';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          {/* <Button type="primary">Button</Button> */}

        <Globalstyle />
        <GlobalIconFontStyle />
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/write" exact component={Write}></Route>
      </Provider>
    );
  }
}

export default App;
