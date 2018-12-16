import React from 'react';
import './style.css';
class ItemSmall extends React.Component {

    render() {
        const content = this.props.content;
        const font_state = content.stocked ? 'stocked' : 'no_stocked';
        return (
            <div >
                <div className={`my_width_half fl ${font_state}`}>{content.name}</div>
                <div className="my_width_half fl">{content.price}</div>
                <div className="clear"></div> 
            </div>
        );
    }
}
export default ItemSmall;