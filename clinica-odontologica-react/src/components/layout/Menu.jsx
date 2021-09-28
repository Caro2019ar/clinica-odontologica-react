import "./Menu.css";
import React from "react";

import { Link } from "react-router-dom";

const Menu = (props) => (
	<aside className="Menu">
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/pacientes">Pacientes</Link>
				</li>
				<li>
					<Link to="/odontologos">Odontologos</Link>
				</li>
				<li>
					<Link to="/turnos">Turnos</Link>
				</li>
			</ul>
		</nav>
	</aside>
);

export default Menu;
