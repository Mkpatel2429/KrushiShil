import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Contactpage from "./components/Contactpage";
import Aboutuspage from "./components/Aboutuspage";
// import Userpage from "./components/Userpage";
import Universitypage from "./components/Universitypage";
import Adminprofile from "./components/Adminprofile";
import Userprofile from "./components/Userprofile";
import Seeddata from "./components/Seeddata";
import Lobby from "./screens/Lobby";
import Room from "./screens/room";
import Seed from "./components/Seed";
import Home from "./AdminDashboard/Home";
import Event from "./Event/form";
import EventData from "./Event/display";
import Alluser from "./AdminDashboard/Alluser";
import Allevents from "./AdminDashboard/Allevents";
import Allseeds from "./AdminDashboard/Allseeds";
import Videohistory from "./AdminDashboard/Videohistory";
import Seeds from "./AdminDashboard/Seeds";
import Resetpage from "./components/Resetpage";
// import Universitydata from "./components/Universitydata";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/Login" element={<Login />}></Route>
					<Route path="/" element={<Homepage />}></Route>
					<Route path="/Register" element={<Register />}></Route>
					<Route path="/ContactUs" element={<Contactpage />}></Route>
					<Route path="/AboutUs" element={<Aboutuspage />}></Route>
					<Route path="/reset" element={<Resetpage />}></Route>

					<Route path="/Userprofile" element={<Userprofile />}></Route>
					<Route path="/AdminPage" element={<Adminprofile />}></Route>
					<Route path="/Userprofile/SeedData" element={<Seeddata />}></Route>
					<Route path="/Userprofile/Lobby" element={<Lobby />}></Route>
					<Route path="/room/:id" element={<Room />}></Route>
					<Route
						path="/Userprofile/SeedData/VegetableSeeds"
						element={<Seed />}></Route>
					<Route path="/UniversityProfile" element={<Universitypage />}></Route>
					<Route path="/AdminPage/Home" element={<Home />}></Route>
					<Route path="/event/form" element={<Event />}></Route>
					<Route path="/event/data" element={<EventData />}></Route>
					<Route path="/users" element={<Alluser />}></Route>
					<Route path="/LatestEvents" element={<Allevents />}></Route>
					<Route path="/LatestSeeds" element={<Allseeds />}></Route>
					<Route path="/VCHistory" element={<Videohistory />}></Route>
					<Route path="/allSeeds" element={<Seeds />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
