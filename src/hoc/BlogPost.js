import React from 'react';
class TextBlock extends React.Component {
    render(){
        return <div>{this.props.text}</div>
    }
}
class BlogPost extends React.Component {

    render() {
        return <TextBlock text={this.props.datas} />;
    }
}

export default BlogPost;