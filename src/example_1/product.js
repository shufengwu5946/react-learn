import React from 'react';
import SearchBox from './search_box';
import List from './list';
import './style.css';
class Product extends React.Component {

    constructor(props){
        super(props);
        this.state = {stocked:false,content:""}
        this.handleChecked = this.handleChecked.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    handleChecked(checked){
        this.setState({stocked:checked});
        
        
    }

    handleChange(c){
        this.setState({content:c});
    }


    render() {

        const data = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ];
        const list = listHandle(data,this.state.stocked,this.state.content);

        return (
            <div className={'my_width'}>
                <SearchBox handle = {this.handleChecked} handleChange = {this.handleChange}></SearchBox>
                <List list = {list}></List>
            </div>
        );
    }
}

function listHandle(list,inStocked,content) {
    let arr = [];
    const s = new Set();
    list.forEach((value) => {
        s.add(value.category);
    });
    

    for (let item of s) {
        let obj = {};
        obj.category = item;
        obj.contentList = [];
        list.forEach(
            (value) => {
                if (value.category === item) {
                    let { name, price, stocked } = value;
                    
                    if(name.search(content)!==-1){
                        // console.log("hehe");
                        
                        if(inStocked){
                            if(stocked){
                                obj.contentList.push({ name, price, stocked });
                            }
                        }else{
                            obj.contentList.push({ name, price, stocked });
                        }
                    }
                    
                    
                }

            }
        );
        arr.push(obj);
    }
    return arr;
}
export default Product;