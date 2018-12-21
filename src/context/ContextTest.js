import React from 'react';
import Toolbar from './Toolbar';
import { themes, ThemeContext } from './theme-context';
class ContextTest extends React.Component {

    constructor(props) {
        super(props)
        this.state = { theme: themes.dark };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        const theme = (this.state.theme === themes.dark)?themes.light:themes.dark;
        this.setState({theme:theme});
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.handleClick} />
                </ThemeContext.Provider>
            </div>

        );
    }
}
export default ContextTest;