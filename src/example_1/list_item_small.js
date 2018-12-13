import React from 'react';
import './style.css';
class ItemSmall extends React.Component {

    render() {
        const content = this.props.content;
        return (
            <div >
                <div className="my_width_half fl">{content.name}</div>
                <div className="my_width_half fl">{content.price}</div>
            </div>
        );
    }
}
export default ItemSmall;