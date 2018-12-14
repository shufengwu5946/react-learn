import React from 'react';
import NumberListItem from './NumberListItem';
class NumberList extends React.Component{

    render(){
        const lists = this.props.numbers;
        return (
            <ul>
                {
                    lists.map((value)=>(<NumberListItem key={value} content={value}></NumberListItem>))
                }
            </ul>
                
        );
    }
}

export default NumberList;