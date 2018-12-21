import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div>
                {/* <ThemeContext.Consumer>
                    {
                        (value) => <button {...this.props} style={{ color: value.text, backgroundColor: value.background }} />
                    }
                </ThemeContext.Consumer> */}
                <button style={{ color: this.context.theme.text, backgroundColor: this.context.theme.background }} 
                onClick = {this.context.handleClick}
                {...this.props} />
            </div>
        )
    }
}

// ThemedButton.contextType = ThemeContext;

export default ThemedButton;