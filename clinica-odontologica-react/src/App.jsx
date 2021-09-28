// import OdontologoComponent from "./components/OdontologoComponent.js";
// import PacienteComponent from "./components/PacienteComponent.js";
// import TurnoComponent from "./components/TurnoComponent.js";
import "./App.css";
import Content from "./components/layout/Content";
import Menu from "./components/layout/Menu";
import { BrowserRouter } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Menu />
				<Content />
			</BrowserRouter>
		</div>
	);
}

export default App;
