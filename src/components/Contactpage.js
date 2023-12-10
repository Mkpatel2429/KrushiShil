import React from "react";
import Navbar from "./Navbar";

function Contactpage() {
	return (
		<div>
			<Navbar />
			<section class="vh-50">
				<h2
					class="h1-responsive font-weight-bold text-center my-4"
					style={{
						color: "darkgreen",
						fontSize: "40px",
					}}>
					Contact us
				</h2>

				<p
					class="text-center w-responsive mx-auto mb-4"
					style={{ color: "darkgreen", fontSize: "19px" }}>
					Do you have any questions? Please do not hesitate to contact us
					directly. Our team will come back to you within a matter of hours to
					help you.
				</p>

				<div class="row w-75 mx-auto col-12 col-md-10 col-lg-10">
					<div class="col-md-9 mb-md-0 mb-5">
						<form id="contact-form" name="contact-form">
							<div class="row">
								<div class="col-md-6">
									<div class="md-form mb-4">
										<label for="name" class="" style={{ color: "darkgreen" }}>
											Your name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											class="form-control"
										/>
									</div>
								</div>

								<div class="col-md-6">
									<div class="md-form mb-4">
										<label for="email" class="" style={{ color: "darkgreen" }}>
											Your email
										</label>
										<input
											type="text"
											id="email"
											name="email"
											class="form-control"
										/>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-15">
									<div class="md-form mb-4">
										<label
											for="subject"
											class=""
											style={{ color: "darkgreen" }}>
											Subject
										</label>
										<input
											type="text"
											id="subject"
											name="subject"
											class="form-control"
										/>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-md-15">
									<div class="md-form">
										<label for="message" style={{ color: "darkgreen" }}>
											Your message
										</label>
										<textarea
											type="text"
											id="message"
											name="message"
											rows="4"
											class="form-control md-textarea"></textarea>
									</div>
								</div>
							</div>
						</form>

						<div class="text-center text-md-left m-2 mt-3">
							<a
								class="btn btn-outline-success btn-lg"
								style={{ marginBottom: "32px", marginTop: "5px" }}>
								Send
							</a>
						</div>
						<div class="status"></div>
					</div>

					<div class="col-md-3 text-center">
						<ul class="list-unstyled mb-0">
							<li>
								<i class="fas fa-map-marker-alt fa-2x"></i>
								<p>San Francisco, CA 94126, USA</p>
							</li>

							<li>
								<i class="fas fa-phone mt-4 fa-2x"></i>
								<p>+ 01 234 567 89</p>
							</li>

							<li>
								<i class="fas fa-envelope mt-4 fa-2x"></i>
								<p>contact@mdbootstrap.com</p>
							</li>
						</ul>
					</div>
				</div>
				<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
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

export default Contactpage;
