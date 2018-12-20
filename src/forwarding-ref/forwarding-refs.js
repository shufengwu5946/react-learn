import React from 'react';
import FancyInput from './fancy-input';
import logProps from './logProps';
class Forward extends React.Component {

    constructor(props) {
        super(props);
        this.textInput1 = React.createRef();
        this.textInput2 = React.createRef();
    }
    click1() {
        this.textInput1.current.focus();
    }

    click2() {
        this.textInput2.current.focus();
    }

    render() {
        const MyInput = React.forwardRef((props,ref)=>(
            <FancyInput myRef = {ref} {...props}></FancyInput>
        ));

        const NewInput = logProps(MyInput);

        return (
            <div>
                <button onClick={(e) => this.click1(e)}>测试1</button>
                <MyInput ref = {this.textInput1} content = {1}></MyInput>
                <button onClick={(e) => this.click2(e)}>测试2</button>
                <NewInput ref = {this.textInput2} content = {2}></NewInput>
            </div>
        );
    }
}
export default Forward;