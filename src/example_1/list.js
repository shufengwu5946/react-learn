import React from 'react';
import './style.css';
import ItemBig from './list_item_big';
class List extends React.Component {

    
    render() {
        const list = this.props.list;
        return (
            <div >
                <div >
                    <div className = "my_width_half font_bold fl">Name</div>
                    <div className = "my_width_half font_bold fl">Price</div>
                </div>
                <div>
                    {
                        list.map(
                            (value)=>(
                                <ItemBig product_type = {value.category} items = {value.contentList}></ItemBig>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}
export default List;