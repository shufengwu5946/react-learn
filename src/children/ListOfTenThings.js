import React from 'react'
import Repeat from './Repeat';
class ListOfTenThings extends React.Component {
    
    render(){
        return(
            
            <Repeat numTimes = {10}>
                {(value)=>(<div key={value}>{value}</div>)}
            </Repeat>
        );
    }
}

export default ListOfTenThings;

