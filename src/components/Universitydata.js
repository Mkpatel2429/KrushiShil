import React, { useState } from "react";
import Navbar from "./Navbar";

function Universitydata() {
	const [Uname, setUniversityName] = useState("");
	const [Uid, setUniversityId] = useState("");
	const [Seedname, setSeedName] = useState("");
	const [SeedInfo, setSeedInfo] = useState("");
	const [SeedProof, setSeedProof] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(Uname, Uid, Seedname, SeedInfo, SeedProof);
		fetch("http://localhost:5000/universityData", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "applicat  ion/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				Uname,
				Uid,
				Seedname,
				SeedInfo,
				SeedProof,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status == "ok") {
					alert("Data Added Successfully");
				} else {
					alert("Data Not Added");
				}
			});
	};
	return (
		<div>
			<form
				className="mx-auto col-10 col-md-8 col-lg-6 my-5 rounded-2 p-4 shadow-lg bg-light"
				onSubmit={handleSubmit}>
				<div className="form-group">
					<label for="exampleFormControlInput1">Krushi Center Name</label>
					<input
						type="input"
						style={{ margin: "10px" }}
						className="form-control"
						id="exampleFormControlInput1"
						onChange={(e) => setUniversityName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlInput1">Krushi Center ID</label>
					<input
						type="id"
						style={{ margin: "10px" }}
						className="form-control"
						id="exampleFormControlInput1"
						onChange={(e) => setUniversityId(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlInput1">Seed Name</label>
					<input
						type="input"
						style={{ margin: "10px" }}
						className="form-control"
						id="exampleFormControlInput1"
						onChange={(e) => setSeedName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label for="exampleFormControlTextarea1">Seed Information</label>
					<textarea
						style={{ margin: "10px" }}
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"
						onChange={(e) => setSeedInfo(e.target.value)}
						required></textarea>
				</div>
				<div className="form-group">
					<label for="exampleFormControlFile1">Example file input</label>
					<input
						type="file"
						style={{ margin: "10px" }}
						className="form-control-file"
						id="exampleFormControlFile1"
						onChange={(e) => setSeedProof(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<button
						className="btn btn-outline-success"
						type="submit"
						style={{ margin: "10px" }}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Universitydata;
