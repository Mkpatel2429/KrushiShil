import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactPaginate from "react-paginate";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../AdminDashboard/css/Admin.css";
import { useRef, useState, useEffect } from "react";

function Allevents() {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(5);
	const [pageCount, setPageCount] = useState(1);
	const currentPage = useRef();

	useEffect(() => {
		currentPage.current = 1;
		// getAllUser();
		getPaginatedEvents();
	}, []);

	//fetching all user
	const getAllEvents = () => {
		fetch("http://localhost:5000/LatestEvents/Allevents", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "EventsData");
				setData(data.data);
			});
	};

	//deleting user
	const deleteEvents = (id, universityName) => {
		if (window.confirm(`Are you sure you want to delete ${universityName}`)) {
			fetch("http://localhost:5000/deleteEvents", {
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
					getAllEvents();
				});
		} else {
		}
	};

	//pagination
	function handlePageClick(e) {
		console.log(e);
		currentPage.current = e.selected + 1;
		getPaginatedEvents();
	}
	function changeLimit() {
		currentPage.current = 1;
		getPaginatedEvents();
	}

	function getPaginatedEvents() {
		fetch(
			`http://localhost:5000/paginatedEvents?page=${currentPage.current}&limit=${limit}`,
			{
				method: "GET",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "EventsData");
				setPageCount(data.pageCount);
				setData(data.result);
			});
	}
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
						<div class="card-header">{i.universityName}</div>
						<div class="card-body">
							<h5 class="card-title">{i.title}</h5>
							<p class="card-text">{i.date}</p>
							<p class="card-text">
								{i.description ? i.description.slice(0, 40) : ""}
							</p>
							<a href="" class="btn btn-outline-black">
								<FontAwesomeIcon
									icon={faTrash}
									onClick={() => deleteEvents(i._id, i.universityName)}
								/>
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Allevents;
