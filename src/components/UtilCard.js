import React from 'react';
import PropTypes from 'prop-types';
import {InputGroup, SimpleInput} from "./Input";
import {Button} from "./Button";

function Title({title, result}) {
	if (title) {
	  return (<h5 className="card-title">{title}: {result}</h5>);
	}
	return null;
}
Title.propTypes = {
	title: PropTypes.string,
	result: PropTypes.number,
};
Title.defaultProps = {
	title: null,
	result: null,
};

export function UtilCard({
	header,
	title,
	title2,
	description,
	btnValue,
	btnPlaceholder,
	inputType,
	result,
	result2,
	action,
	onChange
}) {



	return (
		<div className="card">
		  <div className="card-header">
		    {header}
		  </div>
		  <div className="card-body">
			<Title title={title} result={result} />
			<Title title={title2} result={result2} />
		    <p className="card-text">{description}</p>
	    	<InputGroup
    			action={action}
    			onChange={onChange}
    			type={inputType}
    			btnValue={btnValue}
    			btnPlaceholder={btnPlaceholder}
    		/>
		  </div>
		</div>
	);
}

UtilCard.propTypes = {
	header: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	title2: PropTypes.string,
	description: PropTypes.string.isRequired,
	btnValue: PropTypes.string.isRequired,
	btnPlaceholder: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	result: PropTypes.number,
	result2: PropTypes.number,
	action: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};
UtilCard.defaultProps = {
	title2: null, 
	result: null,
	result2: null,
};


export function UtilCard2({
	header,
	title,
	description,
	onChange1,
	inputName1,
	inputPlaceholder1,
	inputType1,
	onChange2,
	inputName2,
	inputPlaceholder2,
	inputType2,
	btnValue,
	result,
	action,
}) {
	return (
		<div className="card">
		  <div className="card-header">
		    {header}
		  </div>
		  <div className="card-body">
		    <h5 className="card-title">{title}: {result}</h5>
		    <p className="card-text">{description}</p>
	    	<SimpleInput
    			onChange={onChange1}
    			type={inputType1}
    			inputName={inputName1}
    			inputPlaceholder={inputPlaceholder1}
    		/>
	    	<SimpleInput
    			onChange={onChange2}
    			type={inputType2}
    			inputName={inputName2}
    			inputPlaceholder={inputPlaceholder2}
    		/>
    		<Button
    			action={action}
    			btnValue={btnValue}
    		/>
		  </div>
		</div>
	);
}

UtilCard2.propTypes = {
	header: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	onChange1: PropTypes.func.isRequired,
	inputName1: PropTypes.string.isRequired,
	inputPlaceholder1: PropTypes.string.isRequired,
	inputType1: PropTypes.string.isRequired,
	onChange2: PropTypes.func.isRequired,
	inputName2: PropTypes.string.isRequired,
	inputPlaceholder2: PropTypes.string.isRequired,
	inputType2: PropTypes.string.isRequired,
	result: PropTypes.string,
	action: PropTypes.func.isRequired,
	btnValue: PropTypes.string.isRequired,
};
UtilCard2.defaultProps = {
	result: null,
};
