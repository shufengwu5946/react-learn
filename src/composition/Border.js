import React from 'react';
import './style.css';
class Border extends React.Component{
    render(){
        return(
            <div className={'dialog_border'}>
                {this.props.children}
            </div>
        );
    }
}

export default Border;