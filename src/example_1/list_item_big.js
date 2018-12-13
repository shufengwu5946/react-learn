import React from 'react';
import './style.css';
import ItemSmall from './list_item_small';
class ItemBig extends React.Component {

    render() {
        const items = this.props.items;
        return (
            <div>
                <div className='my_width'>{this.props.product_type}</div>
                <ul>
                {
                    items.map(
                        (value)=>(
                            <ItemSmall></ItemSmall>
                        )
                    )
                }
                </ul>
                
            </div>
        );
    }
}
export default ItemBig;