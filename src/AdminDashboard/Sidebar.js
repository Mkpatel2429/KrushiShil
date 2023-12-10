import React from "react";
import {
	BsCart3,
	BsGrid1X2Fill,
	BsFillArchiveFill,
	BsFillGrid3X3GapFill,
	BsPeopleFill,
	BsListCheck,
	BsMenuButtonWideFill,
	BsFillGearFill,
	BsTree,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
	return (
		<aside
			id="sidebar"
			className={openSidebarToggle ? "sidebar-responsive" : ""}>
			<div className="sidebar-title">
				<div className="sidebar-brand">
					<BsTree className="icon_header" /> Soil To Seed
				</div>
				<span className="icon close_icon" onClick={OpenSidebar}>
					X
				</span>
			</div>

			<ul className="sidebar-list">
				<li className="sidebar-list-item">
					<a href="/AdminPage">
						<BsGrid1X2Fill className="icon" /> Dashboard
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="/users">
						<BsPeopleFill className="icon" /> All Users
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="/LatestSeeds">
						<BsFillArchiveFill className="icon" /> Requested Seeds
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="/allSeeds">
						<BsFillArchiveFill className="icon" /> Seeds
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="/LatestEvents">
						<BsListCheck className="icon" /> Latests Events
					</a>
				</li>
				<li className="sidebar-list-item">
					<a href="/VCHistory">
						<BsMenuButtonWideFill className="icon" /> Video Call History
					</a>
				</li>
			</ul>
		</aside>
	);
}

export default Sidebar;
