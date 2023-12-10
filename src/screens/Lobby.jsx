import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import Navbar from "../components/Navbar";

const LobbyScreen = () => {
	const [email, setEmail] = useState("");
	const [room, setRoom] = useState("");

	const socket = useSocket();
	const navigate = useNavigate();

	useEffect(() => {
		const email1 = localStorage.getItem("email");
		setEmail(email1);
	}, []);

	const handleSubmitForm = useCallback(
		(e) => {
			console.log(room, email);
			e.preventDefault();

			fetch("http://localhost:5000/videocallUser", {
				method: "POST",
				crossDomain: true,
				headers: {
					"Content-Type": "application/json",
					Accept: "applicat  ion/json",
					"Access-Control-Allow-Origin": "*",
				},
				body: JSON.stringify({
					email,
					room,
				}),
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.status == "ok") {
						console.log("Lobby", email);
						socket.emit("room:join", { email, room });
					} else {
						alert("Data Not Added");
					}
				});
		},
		[email, room, socket]
	);

	const handleJoinRoom = useCallback(
		(data) => {
			const { email, room } = data;
			navigate(`/room/${room}`);
		},
		[navigate]
	);

	useEffect(() => {
		socket.on("room:join", handleJoinRoom);
		return () => {
			socket.off("room:join", handleJoinRoom);
		};
	}, [socket, handleJoinRoom]);

	return (
		<div>
			<Navbar />
			<h1 style={{ color: "darkgreen", marginTop: "20px" }}>Lobby</h1>
			<form
				className="col-md-8 col-lg-6 col-xl-4 offset-xl-4 rounded-2 p-4 shadow-lg bg-light"
				onSubmit={handleSubmitForm}>
				<label htmlFor="email">Email ID :{email} </label>
				{/* <input
					className="form-control form-control-lg"
					type="email"
					id="email"
					placeholder="Enter your email id"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/> */}
				<br />
				<label htmlFor="room" style={{ marginTop: "10px" }}>
					Room Number:{" "}
				</label>
				{/* <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        /> */}
				<select
					className="form-select form-select-lg"
					onChange={(e) => setRoom(e.target.value)}
					value={room}>
					<option value={1}>Seeds problem</option>
					<option value={2}>Insect problem</option>
					<option value={3}>Carying problem</option>
					<option value={4}>Soil problem</option>
					<option value={5}>Any query</option>
				</select>
				<br />
				<button
					className="btn btn-outline-success btn-lg"
					style={{ marginTop: "10px" }}>
					Join
				</button>
			</form>
		</div>
	);
};

export default LobbyScreen;
