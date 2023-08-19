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
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/Homepage">
						<img src={logo} alt="" srcset="" style={{ width: "55px" }} />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
									marginLeft: 920,
									paddingLeft: 20,
									paddingRight: 20,
								}}>
								Login
							</a>
						</ul>
					</div>
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
