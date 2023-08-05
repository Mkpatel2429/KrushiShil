import React from "react";
import "../css/style.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.jpg";
function Companyslider() {
	return (
		<div>
			<div className="container">
				<h2 className="company">Top Rated Company & University</h2>

				<div class="slider-area">
					<div class="wrapper">
						<div class="item">
							<img
								alt=""
								src={img1}
								style={{ height: "150px", width: "300px" }}
							/>
						</div>
						<div class="item">
							<img
								alt=""
								src={img2}
								style={{ height: "150px", width: "300px" }}
							/>
						</div>
						<div class="item">
							<img
								alt=""
								src={img3}
								style={{ height: "150px", width: "300px" }}
							/>
						</div>
						<div class="item">
							<img
								alt=""
								src={img4}
								style={{ height: "150px", width: "300px" }}
							/>
						</div>
						<div class="item">
							<img
								alt=""
								src={img5}
								style={{ height: "150px", width: "300px" }}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Companyslider;
