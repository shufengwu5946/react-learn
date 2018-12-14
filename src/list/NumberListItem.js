import React from 'react';
class NumberListItem extends React.Component{
    
    render(){
        const content = this.props.content;
        return (
            <li>{content}</li>
        );
    }
}

export default NumberListItem;