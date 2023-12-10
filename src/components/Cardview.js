import React, { Component } from "react";
import seed1 from "../assets/seed1.png";
import seed2 from "../assets/seed2.jpg";
import seed3 from "../assets/seed3.jpg";
// import image2 from "../assets/Image1 (2).jpg";
// import image3 from "../assets/Image1 (3).jpg";
import "../css/style.css";

export class Cardview extends Component {
	render() {
		let { Uname, Uid, Seedname, SeedInfo } = this.props;
		console.log(this.props);
		return (
			<div>
				<div className="container">
					<div className="row">
						<div class="col-lg-4 mb-4">
							<div
								className="card"
								style={{ width: "20rem", backgroundColor: "white" }}>
								<img
									className="card-img-top"
									src={seed1}
									alt="Seeds"
									style={{ height: "200px" }}
								/>

								<div className="card-body">
									<h5 className="card-title" style={{ color: "black" }}>
										Papaya Seeds
									</h5>
									<p className="card-text">
										Potting soil or Potting Mix consists of peat moss, pine
										bark, and other rich ingredients, excluding earthen soil.
									</p>

									<button
										type="button"
										className="btn btn-outline-success"
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
													<h5
														className="modal-title"
														id="exampleModalLongTitle"
														style={{ color: "black" }}>
														Papaya Seeds
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
													<strong>Ganpat University</strong>
													<br />
													<strong>GNU012</strong>
													<br />
													Potting soil or Potting Mix consists of peat moss,
													pine bark, and other rich ingredients, excluding
													earthen soil. Use Potting Mixture for healthy roots
													and plants with the following elements: Vermiculite
													improves air holding capacity and water retention or
													you can use water storing crystals to retain water in
													plants. For space, sand or perlite in the potting
													mixture helps in drainage. Peat moss, coconut coir,
													pine bark, or shredded paper also adds water retention
													to plants. For rich nutrients, choose a potting mix
													with fertilizers and compost. Pick soils that are free
													from stones or lumps.
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-success"
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
						<div class="col-lg-4 mb-4">
							<div
								className="card"
								style={{ width: "20rem", backgroundColor: "white" }}>
								<img
									className="card-img-top"
									src={seed2}
									alt="Seeds"
									style={{ height: "200px" }}
								/>

								<div className="card-body">
									<h5 className="card-title" style={{ color: "black" }}>
										Watermelon Seeds
									</h5>
									<p className="card-text">
										Potting soil or Potting Mix consists of peat moss, pine
										bark, and other rich ingredients, excluding earthen soil.
									</p>

									<button
										type="button"
										className="btn btn-outline-success"
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
													<h5
														className="modal-title"
														id="exampleModalLongTitle"
														style={{ color: "black" }}>
														Watermelon Seeds
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
													<strong>S.K.University</strong>
													<br />
													<strong>SPU012</strong>
													<br />
													<strong>Watering Guide:</strong>
													Water the soil or the roots and not the leaves. Put a
													finger in the soil to check & water the plant if dry.
													Avoid overwatering plants. Keep the soil moist & not
													swampy. Use a well-draining pot to avoid water
													accumulation at the bottom.
													<strong>Sunlight Guide:</strong>
													For Direct Sunlight, Keep the plant pot facing a sunny
													window with direct sunlight all day. For Partial
													Shade, Keep the plant pot not facing the sun and away
													from the window. For Low Light, Keep the plant pot in
													a low light room to encourage growth.
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-success"
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
						<div class="col-lg-4 mb-4">
							<div
								className="card"
								style={{ width: "20rem", backgroundColor: "white" }}>
								<img
									className="card-img-top"
									src={seed3}
									alt="Seeds"
									style={{ height: "200px" }}
								/>

								<div className="card-body">
									<h5 className="card-title" style={{ color: "black" }}>
										Tomato Seeds
									</h5>
									<p className="card-text">
										Potting soil or Potting Mix consists of peat moss, pine
										bark, and other rich ingredients, excluding earthen soil.
									</p>

									<button
										type="button"
										className="btn btn-outline-success"
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
													<h5
														className="modal-title"
														id="exampleModalLongTitle"
														style={{ color: "black" }}>
														Papaya Seeds
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
													<strong>Ganpat University</strong>
													<br />
													<strong>GNU012</strong>
													<br />
													Potting soil or Potting Mix consists of peat moss,
													pine bark, and other rich ingredients, excluding
													earthen soil. Use Potting Mixture for healthy roots
													and plants with the following elements: Vermiculite
													improves air holding capacity and water retention or
													you can use water storing crystals to retain water in
													plants. For space, sand or perlite in the potting
													mixture helps in drainage. Peat moss, coconut coir,
													pine bark, or shredded paper also adds water retention
													to plants. For rich nutrients, choose a potting mix
													with fertilizers and compost. Pick soils that are free
													from stones or lumps.
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-success"
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
}

export default Cardview;
