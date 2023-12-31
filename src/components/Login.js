import React, { useState } from "react";
import Navbar from "./Navbar";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, password);
		fetch("http://localhost:5000/Login", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				Accept: "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status == "ok") {
					alert("Login Successfull");
					window.localStorage.setItem("token", data.data);
					window.localStorage.setItem("email", email);
					window.localStorage.setItem("LoggedIn", true);
					window.location.href = "/Userprofile";
				} else {
					alert("Login Unsuccessfull");
					window.localStorage.setItem("LoggedIn", false);
				}
			});
	};

	return (
		<div>
			<Navbar />
			<h1
				style={{
					paddingTop: "31px",
					paddingBottom: "30px",
					color: "darkgreen",
				}}>
				Login Or Register
			</h1>
			<section className="vh-50">
				<div className="container-fluid h-custom">
					<div className="row d-flex justify-content-center align-items-center h-60">
						<div className="col-md-9 col-lg-6 col-xl-5">
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

								<div className="form-outline mb-4">
									<input
										type="email"
										id="form3Example3"
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

								<div className="d-flex justify-content-between align-items-center">
									<div className="form-check mb-0">
										<input
											className="form-check-input me-2"
											type="checkbox"
											value=""
											id="form2Example3"
										/>
										<label
											className="form-check-label"
											for="form2Example3"
											style={{ color: "darkgreen" }}>
											Remember me
										</label>
									</div>
									<a
										href="/reset"
										className="text-body"
										style={{ color: "darkgreen" }}>
										Forgot password?
									</a>
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
										Login
									</button>
									<p
										className="small fw-bold mt-2 pt-1 mb-5"
										style={{ color: "darkgreen", marginTop: "10px" }}>
										Don't have an account?{" "}
										<a href="/Register" className="link-danger">
											Register
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

export default Login;
