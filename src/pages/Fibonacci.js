import React from 'react';
import {fibonacci} from '../math/fibonacci';
import Header from '../components/Header';
import {UtilCard} from '../components/UtilCard';

class FibonacciPage extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = { result: null, value: null };
	}

	setValue(event)  {
		const value = parseInt(Number(event.target.value), 10);
		this.setState({value});
	}

	handleChange(event) {
		// On Enter or on click
	    if (event.keyCode === 13 || event.type === 'click') {
	    	const {value} = this.state;
	    	const result = fibonacci(value);
	    	this.setState({result});
	    }

	 }

	render() {
		const {result} = this.state;
	    return (
			<div>
				<Header/>
				<UtilCard
					header="Fibonacci"
					title="Fibonacci"
					result={result}
					description={"Enter an integer value and click on 'calculate' button or enter the 'Enter' key."}
					btnValue="Calculate"
					inputType="number"
					action={this.handleChange.bind(this)}
					onChange={this.setValue.bind(this)}
					btnPlaceholder="Integer value"
				/>
			</div>
	    );
	}
}


export default FibonacciPage;
