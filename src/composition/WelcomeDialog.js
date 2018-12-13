import React from 'react';
import Border from './Border';
class WelcomeDialog extends React.Component{
    render(){
        return(
            <Border>
                <h1>title</h1>
                <p>content</p>
            </Border>
        );
    }
}

export default WelcomeDialog;