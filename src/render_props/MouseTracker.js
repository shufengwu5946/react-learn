import React from 'react';
class MouseTracker extends React.Component{

    constructor(props){
        super(props);
        this.state = {x:0,y:0};
    }
    handleMouseMove(e){
        this.setState({x:e.clientX,y:e.clientY});
    }

    render () {
        const x = this.state.x;
        const y = this.state.y;
        return (
            <div style = {{height:'100%'}} onMouseMove = {(e)=>this.handleMouseMove(e)}>
                <p>position x:{x} y:{y}</p>
                {this.props.render(this.state)}
            </div>
        )
    }
}

export default MouseTracker;