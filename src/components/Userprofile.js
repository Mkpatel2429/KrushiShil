import React, { useState, useEffect } from "react";
import AdminProfile from "./Adminprofile";
import UniversityPage from "./Universitypage";
import UserPage from "./Userpage";

function Userprofile() {
	const [userData, setUserData] = useState("");
	const [admin, setAdmin] = useState(false);
	const [University, setUniversity] = useState(false);
	useEffect(() => {
		fetch("http://localhost:5000/userData", {
			method: "POST",
			crossDomain: true,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
				token: window.localStorage.getItem("token"),
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.data.userType == "Admin") {
					window.localStorage.setItem("Admin", true);
					setAdmin(true);
				}

				if (data.data.userType == "University") {
					window.localStorage.setItem("University", true);
					setUniversity(true);
				}
				setUserData(data.data);
				if (data.data == "Token is expired") {
					alert("Token expired login again");
					window.localStorage.clear();
					window.location.href = "./Login";
				}
			});
	}, []);
	if (admin) {
		return admin ? <AdminProfile /> : <UserPage userData={userData} />;
	} else {
		return University ? <UniversityPage /> : <UserPage userData={userData} />;
	}
}
export default Userprofile;
