// Run in js complete
const Button = function(props){
	return(<button>{props.k} {props.l}</button>);
}

// parameters passed as props
ReactDOM.render(<Button l="GoAA" k="a"/>,mountNode)
