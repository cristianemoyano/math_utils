import React from 'react';

class Footer extends React.PureComponent {
   render() {
      return (
        <footer className="text-muted">
          <div className="container">
            <p>Math Utils © 2020 | <a href="https://github.com/cristianemoyano/math_utils" target="_blank"  rel="noopener noreferrer">Source Code</a></p>
          </div>
        </footer>
      );
   }
}

export default Footer;
