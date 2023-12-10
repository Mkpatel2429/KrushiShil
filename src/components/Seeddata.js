import React, { useEffect, useState } from "react";
// import Cardview from "./Cardview";
import seed1 from "../assets/seed1.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Seeddata() {
	const [data, setData] = useState([]);
	const getAllSeed = () => {
		fetch("http://localhost:5000/LatestSeeds/NewSeeds", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, "SeedsData");
				setData(data.data);
			});
	};
	useEffect(() => {
		getAllSeed();
	}, []);

	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-md-12" style={{ marginTop: "15px" }}>
						<form>
							<a
								className="btn btn-outline-success btn-lg"
								type="button"
								style={{ margin: "5px" }}
								href="/Userprofile/SeedData/VegetableSeeds">
								Vegetable Seeds
							</a>
							<a
								className="btn btn-outline-success btn-lg"
								type="button"
								style={{ margin: "5px" }}>
								{" "}
								Herb Seeds
							</a>
							<a
								className="btn btn-outline-success btn-lg"
								type="button"
								style={{ margin: "5px" }}>
								{" "}
								Fruits Seeds
							</a>
							<a
								className="btn btn-outline-success btn-lg"
								type="button"
								style={{ margin: "5px" }}>
								{" "}
								Flower Seeds
							</a>
							<a
								className="btn btn-outline-success btn-lg"
								type="button"
								style={{ margin: "5px" }}>
								{" "}
								Hybrid Seeds
							</a>
							<a
								className="btn btn-outline-success btn-lg"
								type="button"
								style={{ margin: "5px" }}>
								{" "}
								Winter Flow Seeds
							</a>
							<a
								className="btn btn-outline-success btn-lg"
								type="button"
								style={{ margin: "5px" }}>
								{" "}
								Summer Flow Seeds
							</a>
						</form>
					</div>
				</div>
			</div>
			<h2
				style={{
					color: "darkgreen",
					textShadow: "initial",
					fontSize: "40px",
					marginTop: "40px",
				}}>
				<b>Latest Seeds</b>
			</h2>
			<div className="container">
				<div className="row">
					{data.map((item) => {
						// console.log(item);
						return (
							// <Cardview />
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
											{item.Seedname}
										</h5>
										<p className="card-text">
											{item.SeedInfo ? item.SeedInfo.slice(0, 40) : ""}
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
															{item.Seedname}
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
														<strong>{item.Uname}</strong>
														<br />
														<strong>{item.Uid}</strong>
														<br />
														{item.SeedInfo}
														{/* Potting soil or Potting Mix consists of peat moss,
														pine bark, and other rich ingredients, excluding
														earthen soil. Use Potting Mixture for healthy roots
														and plants with the following elements: Vermiculite
														improves air holding capacity and water retention or
														you can use water storing crystals to retain water
														in plants. For space, sand or perlite in the potting
														mixture helps in drainage. Peat moss, coconut coir,
														pine bark, or shredded paper also adds water
														retention to plants. For rich nutrients, choose a
														potting mix with fertilizers and compost. Pick soils
														that are free from stones or lumps. */}
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
							// {/* // <Cardview
							// // 	Seedname={item.Seedname}
							// // 	SeedInfo={item.SeedInfo ? item.SeedInfo.slice(0, 40) : ""}
							// // 	Uid={item.Uid}
							// // 	Uname={item.Uname} */}
							// {/* // /> */}
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Seeddata;
