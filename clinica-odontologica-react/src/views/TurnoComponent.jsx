import ListaTurno from "./ListaTurno";
import InputTurno from "./InputTurno";
import PageTitle from "../components/layout/PageTitle";

const TurnoComponent = () => {
	return (
		<div>
			<PageTitle title="Turnos" />
			<InputTurno />
			<ListaTurno />
		</div>
	);
};

export default TurnoComponent;
