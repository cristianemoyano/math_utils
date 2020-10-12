import React from 'react';
import PropTypes from 'prop-types';

export const InputGroup = ({action, onChange, type, btnValue, btnPlaceholder}) => {
	return (
		<div className="input-group mb-3">
		  <input
		  	type={type}
		  	onChange={onChange}
		  	onKeyDown={action}
		  	className="form-control"
		  	placeholder={btnPlaceholder}
		  />
		  <div className="input-group-append">
		    <button
		    	className="btn btn-primary"
		    	type="button"
		    	onClick={action}
		    >
		    	{btnValue}
		    </button>
		  </div>
		</div>
	);
}

InputGroup.propTypes = {
	action: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	btnValue: PropTypes.string.isRequired,
	btnPlaceholder: PropTypes.string.isRequired,
};


export const SimpleInput= ({onChange, type, inputName, inputPlaceholder}) => {
	return (
		<div className="input-group mb-3">
		  <div className="input-group-prepend">
		    <span className="input-group-text" id="inputGroup-sizing-default">{inputName}</span>
		  </div>
		  <input
		  	type={type}
		  	onChange={onChange}
		  	placeholder={inputPlaceholder}
		  	className="form-control"
		  	aria-label="Default"
		  	aria-describedby="inputGroup-sizing-default"
		  />
		</div>
	);
}

SimpleInput.propTypes = {
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	inputName: PropTypes.string.isRequired,
	inputPlaceholder: PropTypes.string.isRequired,
};
