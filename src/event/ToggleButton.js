import React from 'react';
import WarningBanner from './WarningBanner';
class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: this.props.status };

        // this.longClick = this.longClick.bind(this);
    }

    click(content) {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen
        }));
        alert(content);
    }

    render() {
        const isOpen = this.state.isOpen;
        let toggleButton = null;
        if (isOpen) {
            toggleButton = (
                <button onClick={this.click.bind(this, '点了OFF')}>
                    OFF
            </button>
            );
        } else {
            toggleButton = (
                <button onClick={this.click.bind(this, '点了ON')}>
                    ON
            </button>
            );
        }

        return (
            <div>
                {toggleButton}
                <br />
                <WarningBanner warn = {this.state.isOpen}></WarningBanner>
            </div>
        );



    }
}

export default ToggleButton;