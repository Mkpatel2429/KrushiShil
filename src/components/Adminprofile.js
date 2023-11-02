import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Adminprofile() {
	const logout = () => {
		window.location.href = "/";
		window.localStorage.clear();
	};
	return (
		<div>
			<Navbar />
			<h1>AdminPage</h1>
			<Footer />
		</div>
	);
}

export default Adminprofile;
