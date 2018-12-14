import React from 'react';
import './style.css';
import ItemSmall from './list_item_small';
class ItemBig extends React.Component {

    render() {
        const items = this.props.items;
        const product_type = this.props.product_type;
        return (
            <div>
                <div className='my_width font_bold'>{product_type}</div>
                <ul className="padding_0 margin_0">
                {
                    items.map(
                        (value)=>(
                            <ItemSmall content = {value}></ItemSmall>
                        )
                    )
                }
                </ul>
                
            </div>
        );
    }
}
export default ItemBig;