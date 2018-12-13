import React from 'react';
import './style.css';
class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChecked(event) {

    }
    handleChange(event) {

    }
    render() {
        return (
            <div className=''>
                <input className='my_width' type="text" onChange={this.handleChange} />
                <div className='my_width'>
                    <input type="checkbox" name="" id="inStock" onChange={this.handleChecked} />
                    Only show Products in stock
                </div>
            </div>
        );
    }
}
export default SearchBox;