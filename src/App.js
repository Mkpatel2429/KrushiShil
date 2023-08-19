import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Contactpage from "./components/Contactpage";
import Aboutuspage from "./components/Aboutuspage";

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
				</Routes>
			</Router>
		</div>
	);
}

export default App;
