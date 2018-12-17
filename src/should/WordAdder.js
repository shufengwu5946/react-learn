import React from 'react';
// class ListOfWords extends React.PureComponent {
//     render() {
//         return <div>{this.props.words.join(',')}</div>;
//     }
// }


//不使用ES6
var createReactClass = require('create-react-class');
var ListOfWords = createReactClass({
  render: function() {
    return <div>{this.props.words.join(',')}</div>;
  }
});

// class WordAdder extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             words: ['marklar']
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         // This section is bad style and causes a bug
//         // const words = this.state.words;
//         // words.push('marklar');
//         let words = this.state.words.concat('marklar');
//         this.setState({ words: words });
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick} >test</button>
//                 <ListOfWords words={this.state.words} />
//             </div>
//         );
//     }
// }

//不使用ES6
var WordAdder = createReactClass({
    getInitialState:function(){
        return {words: ['marklar']};
    },
    handleClick:function() {
        // This section is bad style and causes a bug
        // const words = this.state.words;
        // words.push('marklar');
        var words = this.state.words.concat('marklar');
        this.setState({ words: words });
    },
    render:function(){
        return (
            <div>
                <button onClick={this.handleClick} >test</button>
                <ListOfWords words={this.state.words} />
            </div>
        );
    }
});

export default WordAdder;