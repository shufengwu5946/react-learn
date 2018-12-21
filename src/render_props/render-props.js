import React from 'react';
import MouseTracker from './MouseTracker';

class RenderPropsTest extends React.Component {

    constructor(props) {
        super(props);
        this.renderCat = this.renderCat.bind(this);
        this.renderSougou = this.renderSougou.bind(this);
    }

    renderCat(mousePostion) {
        return <Cat mousePostion={mousePostion} />;
    }

    renderSougou(mousePostion) {
        return <Sougou mousePostion={mousePostion} />;
    }

    render() {
        return (
            <>
                <div style={{ height: '500px', position: 'relative' }} >
                    <MouseTracker render={this.renderCat}></MouseTracker>
                </div>
                <div style={{ height: '500px', position: 'relative' }} >
                    <MouseTracker render={this.renderSougou}></MouseTracker>
                </div>
            </>

        )
    }
}

class Cat extends React.Component {
    render() {
        const mousePostion = this.props.mousePostion;
        return (
            <img src="https://www.baidu.com/img/bd_logo1.png" alt="baidu" style={{ position: "absolute", left: mousePostion.x, top: mousePostion.y }} />
        )
    }
}

class Sougou extends React.Component {
    render() {
        const mousePostion = this.props.mousePostion;
        return (
            <img src="https://www.sogou.com/web/index/images/logo_440x140.v.4.png" alt="sougou" style={{ position: "absolute", left: mousePostion.x, top: mousePostion.y }} />
        )
    }
}

export default RenderPropsTest;