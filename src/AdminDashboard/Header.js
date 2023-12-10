import React from "react";
import {
	BsFillBellFill,
	BsFillEnvelopeFill,
	BsPersonCircle,
	BsSearch,
	BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
	const logout = () => {
		window.location.href = "/Login";
		window.localStorage.clear();
	};
	return (
		<header className="header">
			<div className="menu-icon">
				<BsJustify className="icon" onClick={OpenSidebar} />
			</div>
			<div className="header-left">
				<BsSearch className="icon" />
			</div>
			<div className="header-right">
				<BsFillBellFill className="icon" />
				<BsFillEnvelopeFill className="icon" />
				<BsPersonCircle className="icon" />
			</div>
			<div className="header-right">
				<button className="btn btn-outline-success" onClick={logout}>
					Logout
				</button>
			</div>
		</header>
	);
}

export default Header;
