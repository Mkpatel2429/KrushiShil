import "./App.css";
import Cardview from "./components/Cardview";
import Companyslider from "./components/Companyslider";
import Corousel from "./components/Corousel";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Soilcal from "./components/Soilcal";

function App() {
	return (
		<div className="App">
			<Homepage />
			<Corousel />
			<Cardview />
			<Soilcal />
			<Companyslider />
			<Footer />
		</div>
	);
}

export default App;
