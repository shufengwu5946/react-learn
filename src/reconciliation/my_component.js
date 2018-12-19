import React from 'react';
class MyComp extends React.Component{

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
        
    }

    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount');
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    render(){
        return (
            <div className = {this.props.type}></div>
        );
    }
}

export default MyComp;