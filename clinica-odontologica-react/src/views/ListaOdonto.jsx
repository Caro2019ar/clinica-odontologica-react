import React, { useState, useEffect } from "react";
import SectionTitle from "../components/layout/SectionTitle";

import axios from "axios";
const dataOdonto = "http://localhost:8080/odontologos";

const ListaOdonto = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const cargarData = async () => {
			try {
				let response = await axios(dataOdonto);
				setUsers(response.data);

			} catch (error) {
				console.log("error", error);
			}
		};
		cargarData();
		return () => {
			setUsers([]);
		};
	}, []);

	return (
		<div>
			<SectionTitle title="Odontologos" />
			<div className="center">
				<table className="table table-hover">
					<thead>
						<tr style={{ color: "#3D56B2" }}>
							<td>ID</td>
							<td>Nombre</td>
							<td>Apellido</td>
							<td>Matricula</td>
						</tr>
					</thead>
					<tbody>
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.nombre}</td>
								<td>{user.apellido}</td>
								<td>{user.matricula}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListaOdonto;
