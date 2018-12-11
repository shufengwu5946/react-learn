import React from 'react';
class WarningBanner extends React.Component{
    render(){
        if(!this.props.warn){
            return null;
        }
        return (
            <div>warning！！！</div>
        );
    }
}

export default WarningBanner;