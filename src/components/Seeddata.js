import React, { useEffect, useState } from "react";
import Cardview from "./Cardview";

function Seeddata() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/Data", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setData(data.data);
			});
		// async function getData() {
		// 	console.log("hello");
		// 	const response = await fetch("http://localhost:5000/Data");
		// 	setData(await response.json());
		// 	console.log(data);
		// }
		// getData();
	}, []);

	return (
		<div>
			<div className="container">
				<div className="row">
					{data.map((item) => {
						// console.log(item);
						return (
							<>
								{/* <div className="container"> */}
								{/* <h1 className="Header mt-2 text-center">Latest Seeds</h1>{" "} */}
								{/* <div className="row"> */}
								<Cardview
									Seedname={item.Seedname}
									SeedInfo={item.SeedInfo ? item.SeedInfo.slice(0, 40) : ""}
									Uid={item.Uid}
									Uname={item.Uname}
								/>
								{/* </div>
								</div> */}
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Seeddata;
