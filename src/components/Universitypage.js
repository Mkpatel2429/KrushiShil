import React from "react";
import Universitydata from "./Universitydata";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Universitypage() {
	const logout = () => {
		window.location.href = "/";
		window.localStorage.clear();
	};
	return (
		<div>
			<Navbar />
			<h1>Universitypage</h1>
			<Universitydata />
			<Footer />
		</div>
	);
}

export default Universitypage;
