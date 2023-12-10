import React, { useState } from "react";
import Navbar from "../components/Navbar";

const EventForm = () => {
	const [universityName, setUniversityName] = useState("");
	const [date, setDate] = useState("");
	const [title, setTitle] = useState("");
	const [link, setLink] = useState("");
	const [description, setDescription] = useState("");

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// Send a POST request to the backend API to add the event
		fetch("http://localhost:5000/eventData", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "applicat  ion/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				universityName,
				date,
				title,
				link,
				description,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.status == "ok") {
					alert("Data Added Successfully");
				} else {
					alert("Data Not Added");
				}
			});
		// Reset form fields after successful submission
		window.location.href = "/UniversityProfile";
	};

	return (
		<>
			<Navbar />
			<form
				onSubmit={handleFormSubmit}
				className="col-md-6 col-lg-4 col-xl-4 offset-xl-4 rounded-2 p-5 shadow-lg bg-light"
				style={{ marginTop: "50px" }}>
				<h1 className="text-center" style={{ color: "darkgreen" }}>
					Add Event
				</h1>
				<input
					className="form-control form-control-lg"
					type="text"
					style={{ margin: "10px" }}
					placeholder="Krushi Center Name"
					value={universityName}
					onChange={(e) => setUniversityName(e.target.value)}
				/>
				<input
					className="form-control form-control-lg"
					style={{ margin: "10px" }}
					type="date"
					min={new Date().toJSON().slice(0, 10)}
					placeholder="Event date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
				<input
					className="form-control form-control-lg"
					style={{ margin: "10px" }}
					type="text"
					placeholder="Event Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					className="form-control form-control-lg"
					style={{ margin: "10px" }}
					type="text"
					placeholder="Event Link"
					value={link}
					onChange={(e) => setLink(e.target.value)}
				/>
				<textarea
					className="form-control form-control-lg"
					style={{ margin: "10px" }}
					placeholder="Event Description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button className="btn btn-outline-success btn-lg" type="submit">
					Add Event
				</button>
				<button
					className="btn btn-outline-success btn-lg"
					type="exit"
					style={{ marginLeft: "10px" }}>
					Back
				</button>
			</form>
		</>
	);
};

export default EventForm;
