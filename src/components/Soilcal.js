import React, { useState } from "react";
import "../css/style.css";

const Soilcal = () => {
	const [soilArea, setSoilArea] = useState("");
	const [fertilizerAmount, setfertilizaerAmount] = useState("");

	const soilAreaChange = (e) => {
		setSoilArea(e.target.value);
	};

	const countFertilizerAmount = () => {
		const fertilizerPerSquareMeter = 0.5;
		const area = parseFloat(soilArea);

		if (!isNaN(area) && area > 0) {
			const fertilizerAmount = (area * fertilizerPerSquareMeter) / 100;
			setfertilizaerAmount(fertilizerAmount.toFixed(2));
		} else {
			setfertilizaerAmount(0);
		}
	};

	return (
		<div>
			<h1 className="text">Fertilizer Calculator</h1>
			<form>
				<div class="form-group mx-auto col-8 col-md-10 col-lg-6 my-5 border border-5 rounded-2">
					<input
						type="number"
						value={soilArea}
						onChange={soilAreaChange}
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter soil area in square meters"
					/>
				</div>
				<button
					style={{
						marginLeft: "650px",
						marginBottom: "30px",
						marginTop: "0",
						display: "flex",
					}}
					type="submit"
					class="btn btn-outline-success btn-lg"
					onClick={countFertilizerAmount}>
					Submit
				</button>
				<strong className="text1">Amount of Fertilizer Needed : </strong>{" "}
				{fertilizerAmount} kg
			</form>
		</div>
	);
};

export default Soilcal;
