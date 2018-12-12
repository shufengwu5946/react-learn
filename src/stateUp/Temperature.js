import React from 'react';
import Tem from './Tem';
class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.handleTem = this.handleTem.bind(this);
        this.state = {
            temC: "",
            temF: ""
        };
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    handleTem(value, type) {
        if (value && typeof value === "number") {
            if (type === "C") {
                this.setState({
                    temF: this.toFahrenheit(value)
                });
            } else if (type === "F") {
                this.setState({
                    temC: this.toCelsius(value)
                });
            }
        }

    }



    render() {
        return (
            <div>
                <Tem handle={this.handleTem} type='C'></Tem>
                <br />
                <Tem handle={this.handleTem} type='F'></Tem>
            </div>
        );
    }
}

export default Temperature;