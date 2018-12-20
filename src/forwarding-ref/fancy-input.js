import React from 'react';
class FancyInput extends React.Component {

    render() {
        const { myRef, ...rest } = this.props;
        return (
            <div>
                <input type="text" ref={myRef} defaultValue={rest.content} />
            </div>
        );
    }
}

export default FancyInput;