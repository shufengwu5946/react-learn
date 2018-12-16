import React from 'react';
import CustomTextInput from './CustomTextInput';
import CustomTextInput2 from './CustomTextInput2';
class AutoFocusTextInput extends React.Component{
    
    constructor(props){
        super(props);
        this.textInput = React.createRef();
    }

    componentDidMount(){
        this.textInput.current.focusTextInput();
    }
    render(){
        return(
            <div>
                <CustomTextInput ref={this.textInput}></CustomTextInput>
                <CustomTextInput2></CustomTextInput2>
            </div>
            
        );
    }
}

export default AutoFocusTextInput;