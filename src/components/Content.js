import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

function Developers() {
  return (
    <div className="row">
      	<div className="col-lg-4">
        	<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="avatar" width="140" height="140"/>
        	<h2>Cristian Emmanuel Moyano</h2>
        	<p />
      	</div>
      <div className="col-lg-4">
        	<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="avatar" width="140" height="140"/>
        	<h2>Franco Nicolas Navarro</h2>
        	<p />
      </div>
      	<div className="col-lg-4">
        	<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="avatar" width="140" height="140"/>
        	<h2>Jeremias Etura</h2>
        	<p />
      	</div>
    </div>
  );
}


function Title({title}) {
  return (
  	<React.Fragment>
	    <hr className="featurette-divider" />
		<h2 className="jumbotron-heading">{title}</h2>
		<hr className="featurette-divider" />
	</React.Fragment>
  );
}
Title.propTypes = {
	title: PropTypes.string.isRequired,
};


function Link({href, msg}) {
  if (href) {
    return (
    	<a href={href} target="_blank"  className="btn btn-primary" rel="noopener noreferrer">{msg}</a>
    );
  }
  return (<React.Fragment />);
  
}
Link.propTypes = {
	href: PropTypes.string.isRequired,
	msg: PropTypes.string.isRequired,
};


function Item({title, description, href, msg}) {
  return (
  	<React.Fragment>
		<div className="row featurette">
	    	<div className="col-md-12">
	        	<h4 className="featurette-heading">{title}</h4>
	        	<p className="lead">{description}</p>
	        	<Link href={href} msg={msg} />
	      	</div>
	    </div>
	    <br/>
	</React.Fragment>
  );
}
Item.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	msg: PropTypes.string.isRequired,
};


class Content extends React.PureComponent {
   	render() {

   	  	const stringHTMLParsed = parse(
			'This is a web application created for academic purposes.'+
        	'<br/>'+
        	'Date: October 2020.'+
        	'<br/>'+
        	'Subject: Programming II.'+
        	'<br/>'+
        	'University: Champagnat University.'+
        	'<br/>'+
        	'Location: Mendoza, Argentina.'
		)

	    return (
	      	<div className="container marketing">
		        
		        <Title title='Overview' />
		        <Item
	        		description={stringHTMLParsed}
	        	/>
		        <div className="row featurette">
		        	<div className="col-md-12">
		            	<p className="lead" />
		          	</div>
		        </div>

	        	<Title title='Features' />
	        	<Item
	        		title='GitHub Pages'
	        		description='GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.'
	        		href='https://pages.github.com/'
	        		msg='Learn more &gt;&gt;'
	        	/>

	        	<Item
	        		title='This project was bootstrapped with Create React App'
	        		description='Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.'
	        		href='https://create-react-app.dev/'
	        		msg='Learn more &gt;&gt;'
	        	/>

	        	<Item
	        		title='This project is using Bootstrap'
	        		description='Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.'
	        		href='https://getbootstrap.com/'
	        		msg='Learn more &gt;&gt;'
	        	/>

	        	<Item
	        		title='This project is being tested by Travis CI'
	        		description='Travis CI is a hosted continuous integration service used to build and test software projects hosted at GitHub and Bitbucket. '
	        		href='https://about.travis-ci.com/'
	        		msg='Learn more &gt;&gt;'
	        	/>
		      	
	      		<Title title='Developers' />
		      	<Developers />
	      	</div>
	      );
   }
}


export default Content;