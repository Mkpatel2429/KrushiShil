import "./App.css";
import Cardview from "./components/Cardview";
import Corousel from "./components/Corousel";
import Homepage from "./components/Homepage";

function App() {
	return (
		<div className="App">
			<Homepage />
			<Corousel />
			<Cardview />
		</div>
	);
}

export default App;
