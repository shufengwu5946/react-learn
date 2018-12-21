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
import NameForm from './uncontrolled/NameForm';
import FileInput from './uncontrolled/FileInput';
import CounterButton from './should/CounterButton';
import CounterButtonPure from './should/CounterButtonPure';
import WordAdder from './should/WordAdder';
import TickTock from './mixin/TickTock';
import withSubscription from './hoc/withSubscription';
import CommentList from './hoc/CommentList';
import BlogPost from './hoc/BlogPost';
import DataSourceBlogPost from './hoc/DataSourceBlogPost';
import DataSourceComment from './hoc/DataSourceComment';
import Recon from './reconciliation/Recon';
import Fragments from './fragments/fragments';
import './portals/example/index.css';
import Portals from './portals/example/index';
import ErrorBoundaries from './error-boundaries/error-boundaries';
import Forward from './forwarding-ref/forwarding-refs';
import ContextTest from './context/ContextTest';
import ContextTest2 from './context_update_context_from_nested/ContextTest';
import RenderPropsTest from './render_props/render-props';

class App extends Component {

  constructor(props) {
    super(props);
    this.testCommentClick = this.testCommentClick.bind(this);
    this.testBlogClick = this.testBlogClick.bind(this);
  }

  testCommentClick(event) {
    DataSourceComment.setComments();
  }

  testBlogClick(event) {
    DataSourceBlogPost.setBlog(1, "sfwsfwsfw");
    console.log(DataSourceBlogPost.getBlog(1));

  }

  render() {
    const author = { avatarUrl: 'https://www.baidu.com/img/baidu_jgylogo3.gif', name: 'wushufeng' };
    const Comm = withSubscription(CommentList, (obj) => obj.getComments(), DataSourceComment);
    const Blog = withSubscription(BlogPost, (obj, id) => obj.getBlog(id), DataSourceBlogPost);
    return (
      <div className="App">
        <RenderPropsTest></RenderPropsTest>
        <Welcome1 name="sfw"></Welcome1>
        <Welcome2 name='wsf'></Welcome2>
        <Comment text='评论内容' date='评论日期' author={author}></Comment>
        <Clock></Clock>
        <Add1 inc='1'></Add1>
        <ToggleButton status={false} visible='none'></ToggleButton>
        <List></List>
        <ListBlog></ListBlog>
        <NumberList numbers={['one', 'two', 'three', 'four']}></NumberList>
        <FormSubmit></FormSubmit>
        <Temperature></Temperature>
        <WelcomeDialog></WelcomeDialog>
        <Product></Product>
        <ListOfTenThings></ListOfTenThings>
        <PropTypesLearn
          name={'wsf'}
          age={20}
          male={true}
          node={'wushufeng'}
          student={new Student('sfw')}
          shape={{ name: 'shufengwu' }}
          school={"ysu"}
          address={"langfang"}
          books={["JAVA", "javascript"]}
          bag={"adidas"}>
          <button>test1</button>
        </PropTypesLearn>
        <AutoFocusTextInput></AutoFocusTextInput>
        <NameForm></NameForm>
        <FileInput></FileInput>
        <CounterButton></CounterButton>
        <CounterButtonPure></CounterButtonPure>
        <hr />
        <WordAdder></WordAdder>
        <TickTock></TickTock>
        <Comm></Comm>
        <Blog id={1}></Blog>
        <button onClick={this.testCommentClick}>test comment</button>
        <button onClick={this.testBlogClick}>test blog</button>
        <Recon></Recon>
        <Fragments></Fragments>
        <Portals></Portals>
        <div id="modal-root"></div>
        <ErrorBoundaries></ErrorBoundaries>
        <Forward></Forward>
        <ContextTest></ContextTest>
        <ContextTest2></ContextTest2>

      </div>
    );
  }
}



export default App;
