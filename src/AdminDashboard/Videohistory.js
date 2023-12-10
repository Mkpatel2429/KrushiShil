import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../AdminDashboard/css/Admin.css";

function Videohistory() {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(5);
	const [pageCount, setPageCount] = useState(1);
	const currentPage = useRef();
	const [search, setSearch] = useState("");

	useEffect(() => {
		currentPage.current = 1;
		// getAllUser();
		getPaginatedHistory();
	}, []);

	//fetching all user
	const AllVideocallHistory = () => {
		fetch("http://localhost:5000/VCHistory/uservideocallData", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "VideoCallHistoryData");
				setData(data.data);
			});
	};

	//deleting user
	const deleteHistory = (id, name) => {
		if (window.confirm(`Are you sure you want to delete ${name}`)) {
			fetch("http://localhost:5000/deleteHistory", {
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
					AllVideocallHistory();
				});
		} else {
		}
	};

	//pagination
	function handlePageClick(e) {
		console.log(e);
		currentPage.current = e.selected + 1;
		getPaginatedHistory();
	}
	function changeLimit() {
		currentPage.current = 1;
		getPaginatedHistory();
	}

	function getPaginatedHistory() {
		fetch(
			`http://localhost:5000/paginatedHistory?page=${currentPage.current}&limit=${limit}`,
			{
				method: "GET",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userData");
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
			<section className="ftco-section">
				<div className="container">
					<div className="row justify-content-center">
						<div className="row">
							<input
								className="form-control mr-sm-2"
								type="search"
								name=""
								id=""
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Search..."
								style={{
									width: "250px",
									marginTop: "25px",
									marginLeft: "180px",
								}}
							/>
							<div className="col-md-12">
								<div className="table-wrap">
									<table
										className="table table-hover"
										style={{ marginTop: "25px" }}>
										<thead className="thead-primary">
											<tr>
												<th>Id</th>
												<th style={{ fontSize: "15px" }}>Email</th>
												<th style={{ fontSize: "15px" }}>Room NO</th>
												<th style={{ fontSize: "15px" }}>Delete</th>
											</tr>
										</thead>
										<tbody>
											{data
												.filter((i) => {
													{
														return search.toLowerCase() === ""
															? i
															: i.email
																	.toLowerCase()
																	.includes(search.toLowerCase());
													}
												})
												.map((i) => {
													return (
														<tr>
															<td>{i._id}</td>
															<td>{i.email}</td>
															<td>{i.room}</td>
															<td>
																<FontAwesomeIcon
																	icon={faTrash}
																	onClick={() => deleteHistory(i._id, i.email)}
																/>
															</td>
														</tr>
													);
												})}
										</tbody>
									</table>

									<ReactPaginate
										breakLabel="..."
										nextLabel="next >"
										onPageChange={handlePageClick}
										pageRangeDisplayed={5}
										pageCount={pageCount}
										previousLabel="< previous"
										renderOnZeroPageCount={null}
										marginPagesDisplayed={2}
										containerClassName="pagination justify-content-center"
										pageClassName="page-item"
										pageLinkClassName="page-link"
										previousClassName="page-item"
										previousLinkClassName="page-link"
										nextClassName="page-item"
										nextLinkClassName="page-link"
										activeClassName="active"
										forcePage={currentPage.current - 1}
									/>
									<input
										type="number"
										placeholder="Limit"
										onChange={(e) => setLimit(e.target.value)}
									/>
									<button type="btn btn-outline-success" onClick={changeLimit}>
										Set Limit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Videohistory;
