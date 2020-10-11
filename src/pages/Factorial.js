import React from 'react';
import {factorial} from '../math/factorial';
import Header from '../components/Header';
import UtilCard from '../components/UtilCard';

class FactorialPage extends React.Component {

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
	    	const result = factorial(value);
	    	this.setState({result});
	    }

	 }

	render() {
		const {result} = this.state;
	    return (
			<>
				<Header/>
				<UtilCard
					header="Factorial"
					title="Factorial"
					result={result}
					description={"Enter an integer value and click on 'calculate' button or enter the 'Enter' key."}
					btnValue="Calculate"
					inputType="number"
					action={this.handleChange.bind(this)}
					onChange={this.setValue.bind(this)}
					btnPlaceholder="Integer value"
				/>
			</>
	    );
	}
}


export default FactorialPage;
