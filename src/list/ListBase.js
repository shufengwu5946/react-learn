import React from 'react';
class ListBase extends React.Component {

    render() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((value,index)=>(
            <li key={index}>{value}</li>
        ));
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default ListBase;