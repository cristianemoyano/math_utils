import React from 'react';
import {factorial} from '../math/factorial';
import Header from '../components/Header';
import {UtilCard, UtilCard2} from '../components/UtilCard';

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
			<div>
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

				<UtilCard2
					header="Factorial"
					title="Factorial"
					description={"Enter an integer value and click on 'calculate' button or enter the 'Enter' key."}

					inputName1="1"
					inputPlaceholder1="1"
					inputType1="number"
					onChange1={this.setValue.bind(this)}

					inputName2="2"
					inputPlaceholder2="2"
					inputType2="number"
					onChange2={this.setValue.bind(this)}

					btnValue="Calculate"
					result={result}
					action={this.handleChange.bind(this)}
				/>
			</div>
	    );
	}
}


export default FactorialPage;
