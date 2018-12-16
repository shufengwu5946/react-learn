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
import NumberList from './list/NumberList'
import FormSubmit from './form/FormSubmit';
import Temperature from './stateUp/Temperature';
import WelcomeDialog from './composition/WelcomeDialog';
import Product from './example_1/product';
import ListOfTenThings from './children/ListOfTenThings';
import PropTypesLearn from './proptypes/PropTypesLearn';
import Student from './proptypes/student';
import AutoFocusTextInput from './refs/AutoFocusTextInput';
class App extends Component {
  render() {
    const author = {avatarUrl:'https://www.baidu.com/img/baidu_jgylogo3.gif',name:'wushufeng'};
    return (
      <div className="App">
        <Welcome1 name="sfw"></Welcome1>
        <Welcome2 name='wsf'></Welcome2>
        <Comment text='评论内容' date='评论日期' author = {author}></Comment>
        <Clock></Clock>
        <Add1 inc = '1'></Add1>
        <ToggleButton status = {false} visible='none'></ToggleButton>
        <List></List>
        <ListBlog></ListBlog>
        <NumberList numbers={['one','two','three','four']}></NumberList>
        <FormSubmit></FormSubmit>
        <Temperature></Temperature>
        <WelcomeDialog></WelcomeDialog>
        <Product></Product>
        <ListOfTenThings></ListOfTenThings>
        <PropTypesLearn 
          name = {'wsf'}
          age={20}
          male = {true}
          node = {'wushufeng'}
          student = {new Student('sfw')}
          shape = {{name:'shufengwu'}}
          school = {"ysu"}
          address = {"langfang"}
          books={["JAVA","javascript"]}
          bag = {"adidas"}>
            <button>test1</button>
          </PropTypesLearn>
          <AutoFocusTextInput></AutoFocusTextInput>
      </div>
    );
  }
}


export default App;
