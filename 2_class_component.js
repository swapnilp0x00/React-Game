// class component
// Extend from React.Component
class Button extends React.Component{
	constructor(props){
  	super(props);
    this.state={counter:0}
  }
	render(){
		return(<button>{this.state.counter}</button>);
	}
}
ReactDOM.render(<Button l="GoAA" k="a"/>,mountNode)

// same example without constructor ,works same
class Button extends React.Component{
	state = { counter : 0}
	render(){
		return(<button>{this.state.counter}</button>);
	}
}
ReactDOM.render(<Button l="GoAA" k="a"/>,mountNode)

// events
class Button extends React.Component{
	state = {counter:2};
  inc = () => {
  	this.setState({counter:this.state.counter + 1});
  }

	render(){
		return(<button onClick={this.inc}>{this.state.counter}</button>);
	}
}
ReactDOM.render(<Button l="GoAA" k="a"/>,mountNode)

// Final
class Button extends React.Component {
  state = { counter: 0 };
  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}

ReactDOM.render(<Button />, mountNode);
