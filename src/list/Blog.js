import React from 'react';
class Blog extends React.Component {
    render() {
        const datas = this.props.posts;
        const listItems = datas.map(
            (value)=>(
                <li key={value.id}>
                    <h1>{value.title}</h1>
                    <br/>
                    <h3>{value.content}</h3>
                </li>
            )
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}
export default Blog;