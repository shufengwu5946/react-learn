import React from 'react';
import Toolbar from './Toolbar';
import { themes, ThemeContext } from './theme-context';
class ContextTest2 extends React.Component {

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
        const context = {theme:this.state.theme,handleClick:this.handleClick};
        return (
            <div>
                <ThemeContext.Provider value={context}>
                    <Toolbar/>
                </ThemeContext.Provider>
            </div>

        );
    }
}
export default ContextTest2;