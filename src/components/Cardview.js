import React, { Component } from "react";
import image1 from "../assets/Image1 (1).jpg";
// import image2 from "../assets/Image1 (2).jpg";
// import image3 from "../assets/Image1 (3).jpg";

export class Cardview extends Component {
	render() {
		let { Uname, Uid, Seedname, SeedInfo } = this.props;
		console.log(this.props);
		return (
			<div>
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
								{Seedname}
							</h5>
							<p className="card-text">{SeedInfo}</p>

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
												{Seedname}
											</h5>
											<div id="myid">Choose Language</div>
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div className="modal-body">
											{Uname}
											<br />
											{Uid}
											<br />
											{SeedInfo}
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
		);
	}
}

export default Cardview;
