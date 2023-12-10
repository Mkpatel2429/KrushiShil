import React from "react";
import Home from "../AdminDashboard/Home";
import "../AdminDashboard/css/Admin.css";
import Header from "../AdminDashboard/Header";
import Sidebar from "../AdminDashboard/Sidebar";
import { useState } from "react";

function Adminprofile() {
	const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

	const OpenSidebar = () => {
		setOpenSidebarToggle(!openSidebarToggle);
	};
	return (
		<div className="grid-container">
			<Header OpenSidebar={OpenSidebar} />
			<Sidebar
				openSidebarToggle={openSidebarToggle}
				OpenSidebar={OpenSidebar}
			/>
			<Home />
		</div>
	);
}

export default Adminprofile;
