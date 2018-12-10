import React from 'react';
class UserInfo extends React.Component {
    render() {
        const author = this.props.author;
        return (
            <div className="UserInfo">
                <img className="Avatar"
                    src={author.avatarUrl}
                    alt={author.name}
                />
                <div className="UserInfo-name">
                    {author.name}
                </div>
            </div>

        );
    }
}

export default UserInfo;