import React from 'react';
class FormSubmit extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {content:""};
    }

    handleSubmit(event){
        alert(this.state.content);
    }

    handleChange(event){
        this.setState(
            {
                content:event.target.value
            }
        );
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    内容：
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

export default FormSubmit;