import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = { count: 0}
    }

    increment(){
        this.setState({ count: this.state.count + 1});
    }
    decrement(){
        this.setState({ count: this.state.count - 1});
        // if(count < 0){
        //     return count=0;
        // }
    }


    render(){
        return (
            <dir>
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.decrement.bind(this)}>-1</button>
                <button onClick={this.increment.bind(this)}>+1</button>
            </dir>
        );
    }
}
ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
