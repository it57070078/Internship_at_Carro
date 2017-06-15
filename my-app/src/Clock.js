import React from 'react';
import ReactDOM from 'react-dom';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000
    );

  }
  componentWillUnmount(){
    clearInterval(this.timerID);

  }

  tick() {
    this.setState({date: new Date()});
  }

  render(){
    return (
      <dir>
        <h2>Hello, World!</h2>
        <FormattedDate date={this.state.date} />
      </dir>
        
    )
  }
}
function App() {
    return (
      <dir>
        <Clock />
        <Clock />
        <Clock />
      </dir>
    );
  }
  ReactDOM.render(
  <App />, 
  document.getElementById('root'));
