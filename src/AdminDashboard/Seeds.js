import React from "react";
import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../AdminDashboard/css/Admin.css";

function Seeds() {
	const [data, setData] = useState([]);

	useEffect(() => {
		getAllSeed();
	}, []);

	const getAllSeed = () => {
		fetch("http://localhost:5000/allSeeds/approve", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("SeedsData");
				console.log(data, "SeedsData");
				setData(data.data);
			});
	};

	//deleting user
	const deleteSeed = (id, Uname) => {
		if (window.confirm(`Are you sure you want to delete ${Uname}`)) {
			fetch("http://localhost:5000/deleteSeeds", {
				method: "POST",
				crossDomain: true,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({
					id: id,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					alert(data.data);
					getAllSeed();
				});
		}
	};
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};
	return (
		<div className="grid-container">
			<Header OpenSidebar={OpenSidebar} />
			<Sidebar
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			{data.map((i) => {
				return (
					<div class="card" style={{ height: "300px" }}>
						<div class="card-header">{i.Uname}</div>
						<div class="card-body">
							<h5 class="card-title">{i.Seedname}</h5>
							<p class="card-text">
								{i.SeedInfo ? i.SeedInfo.slice(0, 40) : ""}
							</p>
							<a href="" class="btn btn-outline-black">
								<button
									className="btn btn-outline-Dark"
									onClick={() => deleteSeed(i._id, i.Uname)}>
									Delete
								</button>
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Seeds;
