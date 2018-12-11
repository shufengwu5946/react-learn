import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Welcome2 from './welcome/Welcome2';
import Welcome1 from './welcome/Welcome1';
import Comment from './comment/Comment';
import Clock from './clock/Clock';
import Add1 from './add/Add1';
import ToggleButton from './event/ToggleButton';
import List from './list/List';
import ListBlog from './list/ListBlog'

class App extends Component {
  render() {
    const author = {avatarUrl:'https://www.baidu.com/img/baidu_jgylogo3.gif',name:'wushufeng'};
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Welcome1 name="sfw"></Welcome1>
        <Welcome2 name='wsf'></Welcome2>
        <Comment text='评论内容' date='评论日期' author = {author}></Comment>
        <Clock></Clock>
        <Add1 inc = '1'></Add1>
        <ToggleButton status = {false} visible='none'></ToggleButton>
        <List></List>
        <ListBlog></ListBlog>
      </div>
    );
  }
}

export default App;
