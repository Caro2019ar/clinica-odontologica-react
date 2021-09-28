import "./Content.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import OdontologoComponent from "../../views/OdontologoComponent";
import PacienteComponent from "../../views/PacienteComponent";
import TurnoComponent from "../../views/TurnoComponent";
import Home from "../../views/Home";
import NotFound from "../../views/NotFound";

const Content = (props) => (
	<main className="Content">
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/odontologos">
				<OdontologoComponent />
			</Route>
			<Route path="/pacientes">
				<PacienteComponent />
			</Route>
			<Route path="/turnos">
				<TurnoComponent />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</main>
);

export default Content;
