import React from "react";
import image1 from "../assets/Image1 (1).jpg";
import image2 from "../assets/Image1 (2).jpg";
import image3 from "../assets/Image1 (3).jpg";

function Cardview() {
	return (
		<div>
			<h2 className="Header mt-5" align="center">
				Latest Seeds
			</h2>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 mt-4 mx-auto">
						<div className="card" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={image1}
								alt="Seeds"
								style={{ height: "200px" }}
							/>

							<div className="card-body">
								<h5 className="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>

								<button
									type="button"
									className="btn btn-primary"
									data-toggle="modal"
									data-target="#exampleModalCenter">
									Show More
								</button>

								<div
									className="modal fade"
									id="exampleModalCenter"
									tabindex="-1"
									role="dialog"
									aria-labelledby="exampleModalCenterTitle"
									aria-hidden="true">
									<div
										className="modal-dialog modal-dialog-centered"
										role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLongTitle">
													Seed
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal">
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 mt-4">
						<div className="card" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={image2}
								alt="Water Service"
								style={{ height: "200px" }}
							/>

							<div className="card-body">
								<h5 className="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<button
									type="button"
									className="btn btn-primary"
									data-toggle="modal"
									data-target="#exampleModalCenter">
									Show More
								</button>

								<div
									className="modal fade"
									id="exampleModalCenter"
									tabindex="-1"
									role="dialog"
									aria-labelledby="exampleModalCenterTitle"
									aria-hidden="true">
									<div
										className="modal-dialog modal-dialog-centered"
										role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLongTitle">
													Seed
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal">
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 mt-4">
						<div className="card" style={{ width: "20rem" }}>
							<img
								className="card-img-top"
								src={image3}
								alt="Water Service"
								style={{ height: "200px" }}
							/>

							<div className="card-body">
								<h5 className="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<button
									type="button"
									className="btn btn-primary"
									data-toggle="modal"
									data-target="#exampleModalCenter">
									Show More
								</button>

								<div
									className="modal fade"
									id="exampleModalCenter"
									tabindex="-1"
									role="dialog"
									aria-labelledby="exampleModalCenterTitle"
									aria-hidden="true">
									<div
										className="modal-dialog modal-dialog-centered"
										role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLongTitle">
													Seed
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div className="modal-body">
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal">
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cardview;
