import React from "react";
import Companyslider from "./Companyslider";
import Footer from "./Footer";
import Soilcal from "./Soilcal";
import Corousel from "./Corousel";
import Navbar from "./Navbar";
import Cardview from "./Cardview";

function Homepage(props) {
	return (
		<div>
			<Navbar />
			<Corousel />
			<Cardview />
			<Soilcal />
			<Companyslider />
			<Footer />
		</div>
	);
}

export default Homepage;
