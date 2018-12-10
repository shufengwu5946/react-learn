import React from 'react';
import UserInfo from './UserInfo';
class Comment extends React.Component {
    render() {
        return (
            <div>
                <UserInfo author = {this.props.author}/>
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
            </div>
        );
    }
}
export default Comment;