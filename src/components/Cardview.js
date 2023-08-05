import React from "react";
import image1 from "M:/CP-3/soiltoseed/src/assets/Image1 (1).jpg";
// import image2 from "M:/CP-3/soiltoseed/src/assets/Image1 (2).jpg";
// import image3 from "M:/CP-3/soiltoseed/src/assets/Image1 (3).jpg";

function Cardview() {
	return (
		<div>
			<h2 classNameName="Header mt-5" align="center">
				Latest Seeds
			</h2>
			<div classNameName="container">
				<div classNameName="row">
					<div classNameName="col-lg-5 mt-5 mx-auto">
						<div classNameName="card" style={{ width: "20rem" }}>
							<img
								classNameName="card-img-top"
								src={image1}
								alt="Seeds"
								style={{ height: "200px" }}
							/>

							<div classNameName="card-body">
								<h5 classNameName="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p classNameName="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>

								<button
									type="button"
									className="btn btn-primary"
									data-toggle="modal"
									data-target="#exampleModalCenter"
								>
									Show More
								</button>

								<div
									className="modal fade"
									id="exampleModalCenter"
									tabindex="-1"
									role="dialog"
									aria-labelledby="exampleModalCenterTitle"
									aria-hidden="true"
								>
									<div
										className="modal-dialog modal-dialog-centered"
										role="document"
									>
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLongTitle">
													Seed
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close"
												>
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
													data-dismiss="modal"
												>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* <div classNameName="col-lg-4 mt-4">
						<div classNameName="card" style={{ width: "20rem" }}>
							<img
								classNameName="card-img-top"
								src={image2}
								alt="Water Service"
								style={{ height: "200px" }}
							/>

							<div classNameName="card-body">
								<h5 classNameName="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p classNameName="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div classNameName="col-lg-4 mt-4">
						<div classNameName="card" style={{ width: "20rem" }}>
							<img
								classNameName="card-img-top"
								src={image3}
								alt="Water Service"
								style={{ height: "200px" }}
							/>

							<div classNameName="card-body">
								<h5 classNameName="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p classNameName="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div classNameName="col-lg-4 mt-4">
						<div classNameName="card" style={{ width: "20rem" }}>
							<img
								classNameName="card-img-top"
								src={image2}
								alt="Water Service"
								style={{ height: "200px" }}
							/>

							<div classNameName="card-body">
								<h5 classNameName="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p classNameName="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div classNameName="col-lg-4 mt-4">
						<div classNameName="card" style={{ width: "20rem" }}>
							<img
								classNameName="card-img-top"
								src={image1}
								alt="Water Service"
								style={{ height: "200px" }}
							/>

							<div classNameName="card-body">
								<h5 classNameName="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p classNameName="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div>
					<div classNameName="col-lg-4 mt-4">
						<div classNameName="card" style={{ width: "20rem" }}>
							<img
								classNameName="card-img-top"
								src={image3}
								alt="Water Service"
								style={{ height: "200px" }}
							/>

							<div classNameName="card-body">
								<h5 classNameName="card-title" style={{ color: "black" }}>
									Seeds
								</h5>
								<p classNameName="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default Cardview;
