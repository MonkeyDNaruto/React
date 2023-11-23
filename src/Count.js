import React from "react";

class Count extends React.Component{
  state = {
    count: 0
  }

  handleInc = () => {
    this.setState({count: this.state.count + 1});
  };

  handleDec = () => {
    this.setState({count: this.state.count - 1});
  };

  handleRes = () => {
    this.setState({count: 0});
  };

  render() {
    return (
      <div className="App">
       <h1>The count is: {this.state.count}</h1>
       <button onClick={this.handleInc}>Increment</button>
       <button onClick={this.handleDec}>Decrement</button>
       <button onClick={this.handleRes}>Reset</button>
      </div>
    );
  }
}

export default Count;
