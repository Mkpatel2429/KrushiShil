import React from "react";
import {
	faRightFromBracket,
	faRightLeft,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../AdminDashboard/css/Admin.css";

function Allseeds() {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(5);
	const [pageCount, setPageCount] = useState(1);
	const currentPage = useRef();

	useEffect(() => {
		currentPage.current = 1;
		// getAllSeed();
		getPaginatedSeed();
	}, []);

	//fetching all user
	const getAllSeed = () => {
		fetch("http://localhost:5000/LatestSeeds/NewSeeds", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "SeedsData");
				setData(data.data);
			});
	};

	//deleting user
	const deleteSeed = (id, Uname) => {
		if (window.confirm(`Are you sure you want to delete ${Uname}`)) {
			fetch("http://localhost:5000/deleteSeed", {
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
		} else {
		}
	};

	const approveSeed = (id, Uname, Seedname, SeedInfo, SeedProof, Uid) => {
		if (window.confirm(`Are you sure you want to approve ${Uname}`)) {
			fetch("http://localhost:5000/approveSeed", {
				method: "POST",
				crossDomain: true,
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({
					Uname: Uname,
					Uid: Uid,
					Seedname: Seedname,
					SeedInfo: SeedInfo,
					SeedProof: SeedProof,
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

	//pagination
	function handlePageClick(e) {
		console.log(e);
		currentPage.current = e.selected + 1;
		getPaginatedSeed();
	}
	function changeLimit() {
		currentPage.current = 1;
		getPaginatedSeed();
	}

	function getPaginatedSeed() {
		fetch(
			`http://localhost:5000/paginatedSeed?page=${currentPage.current}&limit=${limit}`,
			{
				method: "GET",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "SeedData");
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
								<button
									className="btn btn-outline-Dark"
									icon={faRightLeft}
									onClick={() =>
										approveSeed(
											i._id,
											i.Uname,
											i.Seedname,
											i.SeedInfo,
											i.SeedProof,
											i.Uid
										)
									}>
									Approve
								</button>
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Allseeds;
