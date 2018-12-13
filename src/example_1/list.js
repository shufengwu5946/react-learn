import React from 'react';
import './style.css';
class List extends React.Component {

    
    render() {
        
        return (
            <div >
                <div >
                    <div className = "my_width_half font_bold fl">Name</div>
                    <div className = "my_width_half font_bold fl">Price</div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}
export default List;