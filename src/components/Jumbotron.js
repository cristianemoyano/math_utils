import React from 'react';

class Jumbotron extends React.PureComponent {
   render() {
      return (
		<section className="jumbotron text-center">
	        <div className="container">
	          <h1 className="jumbotron-heading">Math Utils</h1>
	          <p className="lead text-muted">Math Utils is a web application created for academic purposes..</p>
	          <p>
	            <a href="https://github.com/cristianemoyano/math_utils" className="btn btn-primary my-2" target="_blank"  rel="noopener noreferrer">Source Code</a>
	          </p>
	        </div>
      	</section>
      );
   }
}

export default Jumbotron;
