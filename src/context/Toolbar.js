import React from 'react';
import ThemedButton from './ThemedButton';
class Toolbar extends React.Component {

    click(){
        this.props.changeTheme();
    }

    render() {
        return (
            <ThemedButton onClick={(e)=>this.click(e)}>
                Context测试button
                </ThemedButton>

        )
    }
}
export default Toolbar;