import React from 'react';
class Tem extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = {tem:""};
    }

    handleChange(event){
        // this.setState({tem:event.target.value})
        console.log('handleChange');
        
        this.props.handle(event.target.value,this.props.type);
    }

    render(){
        const type = this.props.type;
        let typeLabel = null;
        if(type==='C'){
            typeLabel = "摄氏";
        }else if(type==='F'){
            typeLabel = "华氏";
        }
        return (
            <label>
                {`${typeLabel}温度：`}
                <input type="text" onChange = {this.handleChange} value ={this.props.tem}/>
            </label>
        );
    }
}

export default Tem;