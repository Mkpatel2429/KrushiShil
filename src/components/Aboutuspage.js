import React from "react";
import "../css/About.css";
import img1 from "../assets/avatar-1.webp";
import img2 from "../assets/avatar-2.webp";
import img3 from "../assets/avatar-3.webp";
import Navbar from "./Navbar";
function Aboutuspage() {
	return (
		<div>
			<div class="about-section">
				<h1>About Us Page</h1>
				<p>Some text about who we are and what we do.</p>
				<p>
					Resize the browser window to see that this page is responsive by the
					way.
				</p>
			</div>

			<h2
				style={{
					textAlign: "center",
					marginBottom: "10px",
					color: "darkgreen",
				}}>
				Our Team
			</h2>
			<div class="row">
				<div class="column">
					<div class="card">
						<img src={img2} alt="Jay" style={{ width: "100%" }} />
						<div class="container">
							<h2>Jay Patel</h2>
							<p class="title">Full-Stack Developer</p>
							<p>BTECH 7TH SEM IN INFORMATION TECHNOLOGY</p>
							<p>20012021030</p>
							<p>
								<button class="button">Contact</button>
							</p>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<img src={img3} alt="Manthan" style={{ width: "100%" }} />
						<div class="container">
							<h2>Manthan Patel</h2>
							<p class="title">Full-Stack Developer</p>
							<p>BTECH 7TH SEM IN INFORMATION TECHNOLOGY</p>
							<p>21012022040</p>
							<p>
								<button class="button">Contact</button>
							</p>
						</div>
					</div>
				</div>

				<div class="column">
					<div class="card">
						<img src={img1} alt="Shivam" style={{ width: "100%" }} />
						<div class="container">
							<h2>Shivam Modi</h2>
							<p class="title">Designer</p>
							<p>BTECH 7TH SEM IN INFORMATION TECHNOLOGY</p>
							<p>21012022063</p>
							<p>
								<button class="button">Contact</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Aboutuspage;
