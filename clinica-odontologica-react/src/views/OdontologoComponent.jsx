import PageTitle from "../components/layout/PageTitle";

import ListaOdonto from "./ListaOdonto";
import InputOdonto from "./InputOdonto";

const OdontologoComponent = () => {
	return (
		<div>
			<PageTitle title="Odontologos" />
			<InputOdonto />
			<ListaOdonto />
		</div>
	);
};

export default OdontologoComponent;
