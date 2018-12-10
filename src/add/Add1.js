import React from 'react';
class Add1 extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = { counter: 5 };
    }
    render() {
        return (
            <div>
                <div>
                    {this.state.counter}
                </div>
                <button onClick={this.click}>+1</button>
            </div>
        );
    }

    click() {
        console.log("hehe");
        //异步可能出问题
        // this.setState({ counter: this.state.counter+Number(this.props.inc)});

        this.setState((preState,props)=>({
            counter:preState.counter+Number(props.inc)
        }));
    }
}

export default Add1;