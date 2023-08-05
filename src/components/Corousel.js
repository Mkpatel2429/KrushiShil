import React from "react";
import "../css/Corousel.css";
import image from "../assets/plant.png";

function Corousel() {
	return (
		<div>
			<div className="landing">
				<div className="left">
					<p className="typing">
						“Life is the soil, our choices, and actions the sun and rain, but
						our dreams are the seeds.” <span>~ Richard Paul Evans.</span>
					</p>
				</div>
				<div className="right">
					<img src={image} alt="Save Soil" />
				</div>
			</div>
		</div>
	);
}

export default Corousel;
