import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Url } from '../global/enum';
import Home from '../containers/Home';

const App = () => (
	<BrowserRouter>
		<div id="main">
			<Header />
			<Home />
			<Footer />
		</div>
	</BrowserRouter>
);

export default App
