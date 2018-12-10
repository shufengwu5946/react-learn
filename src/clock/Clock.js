import React from 'react';
class Clock extends React.Component {
    constructor(props) {
        super(props);
        //this.tick = this.tick.bind(this);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.tick();
                clearTimeout(this.timer);
                this.timer = null;
                this.componentDidMount();
            },
            1000
        );
    }

    componentWillMount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <h1>{this.state.date.toLocaleTimeString()}
            </h1>
        );
    }

    tick() {
        const date = { date: new Date() };
        this.setState(date);
    }
}

export default Clock;