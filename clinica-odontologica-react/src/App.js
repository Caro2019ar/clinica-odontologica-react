import OdontologoComponent from "./components/OdontologoComponent.js";
import PacienteComponent from "./components/PacienteComponent.js";
import TurnoComponent from "./components/TurnoComponent.js";

function App() {
	return (
		<div className="App">
			<PacienteComponent />
			<OdontologoComponent />
			<TurnoComponent />
		</div>
	);
}

export default App;
