import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Content from '../components/Content';
import '../assets/App.css';
import 'bootstrap/dist/css/bootstrap.css';


function Home() {
  return (
  	<React.Fragment>
      	<Jumbotron/>
      	<Content/>
    </React.Fragment>
  );
}

export default Home;

