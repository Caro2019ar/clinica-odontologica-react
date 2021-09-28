import InputPaciente from "./InputPaciente";
import ListaPaciente from "./ListaPaciente";
import PageTitle from "../components/layout/PageTitle";
const PacienteComponent = () => {
	return (
		<div>
			<PageTitle title="Pacientes" />
			<InputPaciente />
			<ListaPaciente />
		</div>
	);
};

export default PacienteComponent;
