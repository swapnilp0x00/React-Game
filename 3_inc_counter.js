class Button extends React.Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

class App extends React.Component {
  state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Button incrementValue={100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);

// Loose binding
// Component can only access and change their own state and cal their own functions.
//
// App
//   Button
//   Result
//
// Counter was state on Button but now Result need to access that counter.
// It is not possible for Result to access Button's state
//
// So we move state to one level up App
// And while rendering Result we simply pass that counter it as arguments.
//
// Similarly onclick was defined on button
//
// functions can also be passed as props

// when button is clicked it tells APP to execute function on APP
// App executes function and increment state with parameter from button
// This state is given to result to render
