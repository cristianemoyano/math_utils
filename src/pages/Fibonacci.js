import React from 'react';
import {fibonacci} from '../math/fibonacci';
import {UtilCard} from '../components/UtilCard';

class FibonacciPage extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = { result: null, value: null, serie: [] };
	}

	setValue(event)  {
		const value = parseInt(Number(event.target.value), 10);
		this.setState({value});
	}

	handleChange(event) {
		// On Enter or on click
	    if (event.keyCode === 13 || event.type === 'click') {
	    	const {value} = this.state;
			const serie = fibonacci(value);
			const serieStr = JSON.stringify(serie);
	    	this.setState({result:serie[serie.length-1], serie: serieStr});
	    }

	 }

	render() {
		const {result, serie} = this.state;
	    return (
			<div>
				<UtilCard
					header="Fibonacci"
					title="Fibonacci"
					title2="Serie"
					result={result}
					result2={serie}
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
