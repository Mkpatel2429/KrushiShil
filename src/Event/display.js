import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import axios from 'axios';

const EventList = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Fetch events from the backend API and update the state
		fetch("http://localhost:5000/event/data", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setEvents(data.data);
			});
	}, []);

	return (
		<div>
			<Navbar />
			<h2 style={{ color: "darkgreen", marginTop: "20px" }}>Events</h2>
			<div className="container">
				<div className="row">
					{events.map((event) => (
						<div className="col-lg-4 mb-4">
							<div
								className="card"
								style={{ width: "18rem", backgroundColor: "white" }}>
								<div className="card-body">
									<h5 className="card-title" style={{ color: "black" }}>
										{event.universityName}
									</h5>
									<h6
										className="card-subtitle mb-2 text-muted"
										style={{ color: "black" }}>
										{event.title}
									</h6>
									<p className="card-text">
										{event.description ? event.description.slice(0, 200) : ""}
									</p>
									<a
										href={event.link}
										className="btn btn-outline-success"
										target="_blank"
										rel="noopener noreferrer">
										Event Link
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<button
				className="btn btn-outline-success btn-lg"
				type="exit"
				style={{ marginTop: "50px" }}
				onClick={() => {
					window.history.back();
				}}>
				Previous Page
			</button>
		</div>
	);
};

export default EventList;
