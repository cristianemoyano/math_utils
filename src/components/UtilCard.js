import React from 'react';
import PropTypes from 'prop-types';
import Input from "./Input";

function UtilCard({
	header,
	title,
	description,
	btnValue,
	btnPlaceholder,
	inputType,
	result,
	action,
	onChange
}) {
	return (
		<div className="card">
		  <div className="card-header">
		    {header}
		  </div>
		  <div className="card-body">
		    <h5 className="card-title">{title}: {result}</h5>
		    <p className="card-text">{description}</p>
	    	<Input
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
	description: PropTypes.string.isRequired,
	btnValue: PropTypes.string.isRequired,
	btnPlaceholder: PropTypes.string.isRequired,
	inputType: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default UtilCard;
