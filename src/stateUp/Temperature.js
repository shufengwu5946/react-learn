import React from 'react';
import Tem from './Tem';
class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.handleTem = this.handleTem.bind(this);
        this.state = {
            tem: "",
            type: "C"
        };
    }



    handleTem(value, type) {

        this.setState({
            tem: value,
            type: type
        });

    }



    render() {
        const tem = this.state.tem;
        
        let temC = null;
        let temF = null;
        if (tem.length>0&&!Number.isNaN(Number(tem))) {
            temC = this.state.type === 'C' ? tem : toCelsius(Number(tem));
            temF = this.state.type === 'F' ? tem : toFahrenheit(Number(tem));
        } else {
            temC = this.state.type === 'C' ? tem : NaN;
            temF = this.state.type === 'F' ? tem : NaN;
        }


        return (
            <div>
                <Tem handle={this.handleTem} tem={temC} type='C'></Tem>
                <br />
                <Tem handle={this.handleTem} tem={temF} type='F'></Tem>
            </div>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export default Temperature;