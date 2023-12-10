import React from "react";
import image1 from "../assets/Image1 (1).jpg";
import image2 from "../assets/Image1 (2).jpg";
import image3 from "../assets/Image1 (3).jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Seed() {
	return (
		<div>
			<Navbar />
			<h1 style={{ marginTop: "10px", color: "green" }}>Vegetable Seeds</h1>
			<div class="row row-cols-3 row-cols-md-3" style={{ marginLeft: "50px" }}>
				<div class="col mb-1">
					<div
						class="card"
						style={{
							width: "20rem",
							height: "30rem",
							backgroundColor: "white",
						}}>
						<img
							src={image1}
							class="card-img-top"
							alt="..."
							style={{ height: "200px" }}
						/>
						<div class="card-body">
							<h5 class="card-title">
								Sweet Corn Seeds - F1 Hybrid Vegetable Seeds
							</h5>
							<p class="card-text">
								The glory of planting your garden is unmatched. Every plant has
								its growing requirements. To provide plants the basic care, we
								have mentioned some basic steps to follow when growing your
								vegetables, fruits, or flowers.
							</p>
						</div>
					</div>
				</div>
				<div class="col mb-4">
					<div
						class="card"
						style={{
							width: "20rem",
							height: "30rem",
							backgroundColor: "white",
						}}>
						<img
							src={image2}
							class="card-img-top"
							alt="..."
							style={{ height: "200px" }}
						/>
						<div class="card-body">
							<h5 class="card-title">
								Radish All Season F1 Hybrid Vegetable Seeds
							</h5>
							<p class="card-text">
								he glory of planting your garden is unmatched. Every plant has
								its growing requirements. To provide plants the basic care, we
								have mentioned some basic steps to follow when growing your
								vegetables, fruits, or flowers.
							</p>
						</div>
					</div>
				</div>
				<div class="col mb-4">
					<div
						class="card"
						style={{
							width: "20rem",
							height: "30rem",
							backgroundColor: "white",
						}}>
						<img
							src={image3}
							class="card-img-top"
							alt="..."
							style={{ height: "200px" }}
						/>
						<div class="card-body">
							<h5 class="card-title">
								Mustard Seeds Florida Broad Leaf- Imported Vegetable Seeds
							</h5>
							<p class="card-text">
								The glory of planting your garden is unmatched. Every plant has
								its growing requirements. To provide plants the basic care, we
								have mentioned some basic steps to follow when growing your
								vegetables, fruits, or flowers.
							</p>
						</div>
					</div>
				</div>
				<div class="col mb-4">
					<div
						class="card"
						style={{
							width: "20rem",
							height: "30rem",
							backgroundColor: "white",
						}}>
						<img
							src={image1}
							class="card-img-top"
							alt="..."
							style={{ height: "200px" }}
						/>
						<div class="card-body">
							<h5 class="card-title">
								Carrot Seeds Selection Red Desi Vegetable Seeds
							</h5>
							<p class="card-text">
								Red carrots, Gaajar, or Indian carrots are red and are best
								enjoyed during the winter specifically in India. The widely
								consumed carrot are in orange and red color all over the south
								Asian countries.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Seed;
