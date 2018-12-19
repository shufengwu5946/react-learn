import React from 'react';
import './style.css';
import MyComp from './my_component';
class Recon extends React.PureComponent {
    componentDidMount() {
        // fetch('http://t.weather.sojson.com/api/weather/city/hhfalfl')
        //     .then(response => {
        //         if (response.ok) {
        //             return response.json();
        //         } else {
        //             return Promise.reject(Object.assign({}, response.json(), {
        //                 status: response.status,
        //                 statusText: response.statusText
        //             }));
        //         }
        //     })
        //     .then(data => {
        //         // data就是我们请求的repos
        //         console.log(data);
        //     })
        //     .catch(error => {
        //         console.log(error.status);
        //         console.log(error.statusText);

        //     });
    }

    constructor(props) {
        super(props);
        this.state = { type1: 'small',type2: 'small' };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1() {
        if (this.state.type1 === 'small') {
            this.setState({ type1: 'big' });
        } else {
            this.setState({ type1: 'small' });
        }
    }

    handleClick2() {
        if (this.state.type2 === 'small') {
            this.setState({ type2: 'big' });
        } else {
            this.setState({ type2: 'small' });
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.type1}></div>
                <button onClick={this.handleClick1}>测试相同类型DOM元素</button>
                <MyComp type = {this.state.type2}></MyComp>
                <button onClick={this.handleClick2}>测试相同类型组件元素</button>
            </div>
        );
    }

}
export default Recon;