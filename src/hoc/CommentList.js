import React from 'react';
class Comment extends React.Component{
    render(){
        return (
            <div>{this.props.comment}</div>
        );
    }
}

class CommentList extends React.Component {
    render() {
        console.log(this.props.datas);
        
        return (
            <div>
                {this.props.datas.map((comment) => (
                    <Comment key={comment.comment.id} comment={comment.comment.text}  />
                ))}
            </div>
        );
    }
}
export default CommentList;