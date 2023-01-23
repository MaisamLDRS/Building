import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import SocialFollow from "./components/SocialFollow"
import { Widget } from 'react-chat-widget';



function App() {
	return (
	<React.Fragment>

		<Navbar/>
      	<SocialFollow/>

    </React.Fragment>    
	);
}



export default App;
