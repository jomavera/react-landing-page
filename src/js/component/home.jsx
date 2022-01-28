import React from "react";
import NavBar from "./navbar.jsx";
import JumboTron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar />
			<JumboTron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;
