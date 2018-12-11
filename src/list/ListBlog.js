import React from 'react';
import Blog from './Blog';

class ListBlog extends React.Component {
    render() {
        const posts = [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];
        return (
            <Blog posts={posts}></Blog>
        );
    }
}

export default ListBlog;