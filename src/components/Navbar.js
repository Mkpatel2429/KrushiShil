import React from "react";
import logo from "M:/CP-3/soiltoseed/src/assets/logo.png";

function Navbar() {
	const isLoggedin = window.localStorage.getItem("LoggedIn");
	const userEmail = window.localStorage.getItem("email");
	const logout = () => {
		window.location.href = "/";
		window.localStorage.clear();
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/Homepage">
					<img
						src={logo}
						alt=""
						srcset=""
						style={{ width: "55px", marginLeft: "10px" }}
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/Home">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/AboutUs">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/ContactUs" tabindex="-1">
								Contact Us
							</a>
						</li>

						{isLoggedin ? (
							<>
								<li className="nav-item">
									<a className="nav-link" href="/Userprofile/SeedData">
										Latest Seeds
									</a>
								</li>
								<div className="btn-group" style={{ marginLeft: "680px" }}>
									<button type="button" className="btn btn-success">
										{userEmail}
									</button>
									<button
										type="button"
										className="btn btn-success dropdown-toggle dropdown-toggle-split"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false">
										<span className="sr-only">Toggle Dropdown</span>
									</button>
									<div className="dropdown-menu">
										<a className="dropdown-item" href="#">
											Action
										</a>
										<a className="dropdown-item" href="#">
											Another action
										</a>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" onClick={logout}>
											Logout
										</a>
									</div>
								</div>
							</>
						) : (
							<>
								<a
									href="/Login"
									className="btn btn-outline-success me-2"
									role="button"
									style={{
										marginLeft: "10px",
										paddingLeft: "20px",
										paddingRight: "20px",
									}}>
									Login
								</a>
							</>
						)}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
