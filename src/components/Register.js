import React, { useState } from "react";
import Navbar from "./Navbar";

function Register() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userType, setUserType] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(fullname, email, password);
		fetch("http://localhost:5000/Register", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				fullname,
				email,
				password,
				userType,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data, "UserDetails");
				if (data.status == "ok") {
					alert("Register Successfull");
					window.location.href = "/Login";
				} else {
					alert("Register Unsuccessfull");
				}
				const AdminEmail = email.endsWith("gov.in");
				const UniversityEmail = email.endsWith("University.in");
				if (
					(data.userType == "Admin" && data.email == "AdminEmail") ||
					(data.userType == "University" && data.email == "UniversityEmail")
				) {
					alert("Email id is not valid");
				}
			});
	};

	return (
		<div>
			<Navbar />
			<h1
				style={{
					paddingTop: "23px",
					paddingBottom: "22px",
					color: "darkgreen",
				}}>
				Register
			</h1>
			<section className="vh-50">
				<div className="container-fluid h-custom">
					<div className="row d-flex justify-content-center align-items-center h-60">
						<div className="col-md-8 col-lg-5 col-xl-5">
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="img-fluid"
								alt="Sample image"
							/>
						</div>
						<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
							<form onSubmit={handleSubmit}>
								<div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
									<p
										className="lead fw-normal mb-0 me-3"
										style={{ color: "darkgreen" }}>
										Sign in with
									</p>
									<button
										type="button"
										className="btn btn-success btn-floating mx-1">
										<i className="fab fa-facebook-f"></i>
									</button>

									<button
										type="button"
										className="btn btn-success btn-floating mx-1">
										<i className="fab fa-twitter"></i>
									</button>

									<button
										type="button"
										className="btn btn-success btn-floating mx-1">
										<i className="fab fa-linkedin-in"></i>
									</button>
									<button
										type="button"
										className="btn btn-success btn-floating mx-1">
										<i className="fab fa-google"></i>
									</button>
								</div>

								<div className="divider d-flex align-items-center my-4">
									<p className="text-center fw-bold mx-3 mb-0">Or</p>
								</div>

								<div>
									Register As
									<input
										type="radio"
										name="UserType"
										value="User"
										onChange={(e) => setUserType(e.target.value)}
									/>
									User
									<input
										type="radio"
										name="UserType"
										value="Admin"
										onChange={(e) => setUserType(e.target.value)}
									/>
									Admin
									<input
										type="radio"
										name="UserType"
										value="University"
										onChange={(e) => setUserType(e.target.value)}
									/>
									University
								</div>

								<div className="form-outline mb-3">
									<input
										type="text"
										id="form3Example3"
										className="form-control form-control-lg"
										placeholder="Enter a Your FullName"
										onChange={(e) => setFullname(e.target.value)}
										required
									/>
								</div>

								<div className="form-outline mb-3">
									<input
										type="email"
										id="form3Example4"
										className="form-control form-control-lg"
										placeholder="Enter a Email ID"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="form-outline mb-3">
									<input
										type="password"
										className="form-control form-control-lg"
										placeholder="Enter a Password"
										onChange={(e) => setPassword(e.target.value)}
										required
									/>
								</div>

								<div className="text-center text-lg-start mt-4 pt-2">
									<button
										type="submit"
										className="btn btn-outline-success btn-lg"
										style={{
											paddingLeft: "2.5rem",
											paddingRight: "2.5rem",
											marginTop: "10px",
											marginBottom: "20px",
										}}>
										Register
									</button>
									<p
										className="small fw-bold mt-2 pt-1 mb-5"
										style={{ color: "darkgreen", marginTop: "10px" }}>
										Do have an account?{" "}
										<a href="/Login" className="link-danger">
											Login
										</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-3 px-xl-5 bg-success">
					<div className="text-white mb-3 mb-md-0">
						Copyright © 2023. All rights reserved.
					</div>

					<div>
						<a href="#!" className="text-white me-4">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#!" className="text-white me-4">
							<i className="fab fa-twitter"></i>
						</a>
						<a href="#!" className="text-white me-4">
							<i className="fab fa-google"></i>
						</a>
						<a href="#!" className="text-white">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Register;
