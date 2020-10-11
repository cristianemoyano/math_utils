import React from 'react';
import PropTypes from 'prop-types';

const Input = ({action, onChange, type, btnValue, btnPlaceholder}) => {
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

Input.propTypes = {
	action: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	btnValue: PropTypes.string.isRequired,
	btnPlaceholder: PropTypes.string.isRequired,
};

export default Input;
