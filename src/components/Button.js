import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({action, btnValue}) => {
	return (
	    <button
	    	className="btn btn-primary"
	    	type="button"
	    	onClick={action}
	    >
	    	{btnValue}
	    </button>
	);
}

Button.propTypes = {
	action: PropTypes.func.isRequired,
	btnValue: PropTypes.string.isRequired,
};
