import React from 'react';
import PropTypes from 'prop-types';
import Student from './student';
class PropTypesLearn extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.name}</h3>
                <h3>{this.props.age}</h3>
                <h3>{this.props.male?'男':'女'}</h3>
                <h3>{this.props.node}</h3>
                <h3>{this.props.student.name}</h3>
                <h3>{this.props.shape.name}</h3>
                {this.props.children}
                <h3>{this.props.bag}</h3>
            </div>
            
        );
    }
}

PropTypesLearn.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    male:PropTypes.bool,
    node:PropTypes.node,
    student:PropTypes.instanceOf(Student),
    shape:PropTypes.shape({
        name: PropTypes.string
    }),
    school:PropTypes.string.isRequired,
    address: function(props, propName, componentName) {
        // if (!/langfang/.test(props[propName])) {
        //     return new Error(
        //     'Invalid prop `' + propName + '` supplied to' +
        //     ' `' + componentName + '`. Validation failed.'
        //     );
        // }
        // console.log(props);
        // console.log(propName);
        // console.log(componentName);
        console.log(props[propName]);
        
    },
    books: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
        // if (!/matchme/.test(propValue[key])) {
        //   return new Error(
        //     'Invalid prop `' + propFullName + '` supplied to' +
        //     ' `' + componentName + '`. Validation failed.'
        //   );
        // }
        console.log(propValue);
        console.log(key);
        console.log(componentName);
        console.log(location);
        console.log(propFullName);
    }),
    children:PropTypes.element.isRequired,
    bag:PropTypes.string.isRequired
};

PropTypesLearn.defaultProps = {
    bag:"nike"
}

export default PropTypesLearn;