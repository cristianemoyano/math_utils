import React from 'react';
import {gcd} from '../math/gcd';
import Header from '../components/Header';
import {UtilCard2} from '../components/UtilCard';

class GCDPage extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = { result: null, value1: null, value2: null };
	}

	setValue1(event)  {
		const value1 = parseInt(Number(event.target.value), 10);
        this.setState({value1});
    }

    setValue2(event)  {
		const value2 = parseInt(Number(event.target.value), 10);
        this.setState({value2});
    }

	handleChange(event) {
		// On click
	    if (event.type === 'click') {
	    	const {value1, value2} = this.state;
	    	const result = gcd(value1, value2);
	    	this.setState({result});
	    }

	 }

	render() {
		const {result} = this.state;
	    return (
			<>
				<Header/>
				<UtilCard2
                    header="GCD"
                    title="GCD"
                    description={"Enter two integer values and click the 'calculate' button."}
                
                    inputName1="Number one"
                    inputPlaceholder1="Enter the first number: "
                    inputType1="number"
                    onChange1={this.setValue1.bind(this)}
                
                    inputName2="Number two"
                    inputPlaceholder2="Enter the second number: "
                    inputType2="number"
                    onChange2={this.setValue2.bind(this)}
                
                    btnValue="Calculate"
                    result={result}
                    action={this.handleChange.bind(this)}
                />
			</>
	    );
	}
}


export default GCDPage;
