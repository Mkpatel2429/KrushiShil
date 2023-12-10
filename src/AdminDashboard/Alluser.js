import React from "react";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../AdminDashboard/css/Admin.css";

function Alluser() {
	const [data, setData] = useState([]);
	const [limit, setLimit] = useState(5);
	const [pageCount, setPageCount] = useState(1);
	const currentPage = useRef();
	const [search, setSearch] = useState("");

	useEffect(() => {
		currentPage.current = 1;
		// getAllUser();
		getPaginatedUsers();
	}, []);

	//fetching all user
	const getAllUser = () => {
		fetch("http://localhost:5000/users/getAllUser", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "userData");
				setData(data.data);
			});
	};

	//logout

	//deleting user
	const deleteUser = (id, name) => {
		if (window.confirm(`Are you sure you want to delete ${name}`)) {
			fetch("http://localhost:5000/deleteUser", {
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
					getAllUser();
				});
		} else {
		}
	};

	//pagination
	function handlePageClick(e) {
		console.log(e);
		currentPage.current = e.selected + 1;
		getPaginatedUsers();
	}
	function changeLimit() {
		currentPage.current = 1;
		getPaginatedUsers();
	}

	function getPaginatedUsers() {
		fetch(
			`http://localhost:5000/paginatedUsers?page=${currentPage.current}&limit=${limit}`,
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
				<div className="container-fluid">
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
												<th style={{ fontSize: "15px" }}>Name</th>
												<th style={{ fontSize: "15px" }}>Email</th>
												<th style={{ fontSize: "15px" }}>User-Type</th>
												<th style={{ fontSize: "15px" }}>Delete</th>
											</tr>
										</thead>
										<tbody>
											{data
												.filter((i) => {
													{
														return search.toLowerCase() === ""
															? i
															: i.fullname
																	.toLowerCase()
																	.includes(search.toLowerCase());
													}
												})
												.map((i) => {
													return (
														<tr>
															<td>{i._id}</td>
															<td>{i.fullname}</td>
															<td>{i.email}</td>
															<td>{i.userType}</td>
															<td>
																<FontAwesomeIcon
																	icon={faTrash}
																	onClick={() => deleteUser(i._id, i.fullname)}
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
										className="form-control"
										style={{ width: "300px", marginLeft: "158px" }}
										type="number"
										placeholder="Limit"
										onChange={(e) => setLimit(e.target.value)}
									/>
									<button
										type="button"
										className="btn btn-outline-success"
										onClick={changeLimit}>
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

export default Alluser;
