import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render() {
        return (
            <div>
                {/* <ThemeContext.Consumer>
                    {
                        (value) => <button {...this.props} style={{ color: value.text, backgroundColor: value.background }} />
                    }
                </ThemeContext.Consumer> */}
                <button {...this.props} style={{ color: this.context.text, backgroundColor: this.context.background }} />
            </div>
        )
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;