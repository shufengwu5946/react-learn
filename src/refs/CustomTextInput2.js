import React from 'react';
function CustomTextInput2(props) {
    // 这里必须声明 textInput，这样 ref 回调才可以引用它
    let textInput = null;

    function handleClick() {
        textInput.focus();
    }

    return (
        <div>
        <input
            type="text"
            ref={(input) => { textInput = input; }} />

        <input
            type="button"
            value="Focus the text input"
            onClick={handleClick}
        />
        </div>
    );  
}
export default CustomTextInput2;