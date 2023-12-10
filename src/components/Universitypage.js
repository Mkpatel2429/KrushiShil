import React from "react";
import Universitydata from "./Universitydata";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Universitypage() {
	return (
		<div>
			<Navbar />
			<h1 style={{ color: "darkgreen", marginTop: "30px" }}>Universitypage</h1>
			<Universitydata />
			<Footer />
		</div>
	);
}

export default Universitypage;
