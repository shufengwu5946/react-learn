import React from 'react';
function withSubscription(WrappedComponent,getDataFunc,dataSource){
    class Result extends React.Component{

        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            console.log(getDataFunc(dataSource,props));
            
            this.state = {
                datas:getDataFunc(dataSource,props.id)
            }
        }

        componentDidMount(){
            dataSource.addChangeListener(this.handleChange);
        }

        componentWillMount(){
            dataSource.removeChangeListener(this.handleChange);
        }

        handleChange(){
            this.setState({
                datas:getDataFunc(dataSource,this.props.id)
            });
        }

        render(){
            return(
                <WrappedComponent datas = {this.state.datas} {...this.props}></WrappedComponent>
            );
        }
    }
    return Result;
}

export default withSubscription;