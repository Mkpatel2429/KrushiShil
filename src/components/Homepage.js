import React from "react";
import logo from "M:/CP-3/soiltoseed/src/assets/logo.png";
import Cardview from "./Cardview";
import Companyslider from "./Companyslider";
import Footer from "./Footer";
import Soilcal from "./Soilcal";
import Corousel from "./Corousel";

function Homepage() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/Homepage">
					<img
						src={logo}
						alt=""
						srcset=""
						style={{ width: "55px", marginLeft: "10px" }}
					/>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/Home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/AboutUs">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/ContactUs" tabindex="-1">
								Contact Us
							</a>
						</li>
						<a
							href="/Login"
							className="btn btn-outline-success me-2"
							role="button"
							style={{
								marginLeft: "10px",
								paddingLeft: "20px",
								paddingRight: "20px",
							}}>
							Login
						</a>
					</ul>
				</div>
			</nav>
			<Corousel />
			<Cardview />
			<Soilcal />
			<Companyslider />
			<Footer />
		</div>
	);
}

export default Homepage;
