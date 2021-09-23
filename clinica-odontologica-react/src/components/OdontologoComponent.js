import React, { useState, useEffect } from "react";
import axios from "axios";
import dataOdonto from "../data/dataOdonto.json";
//const dataOdonto = "http://localhost:8080/odontologos";

const OdontologoComponent = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const cargarData = async () => {
			try {
				//let response = await axios(dataOdonto);
				// setUsers(response.data);
				let response = dataOdonto;
				setUsers(response);
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
			<h1 className="text-center" style={{ color: "#14279B" }}>
				Odontologos
			</h1>
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
	);
};

export default OdontologoComponent;
