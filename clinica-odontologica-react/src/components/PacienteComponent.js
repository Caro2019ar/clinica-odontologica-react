import React, { useState, useEffect } from "react";
import axios from "axios";
import dataPacientes from "../data/dataPacientes.json";
//const dataPacientes = "http://localhost:8080/Pacientes";

const PacienteComponent = () => {
	const [pacientes, setPacientes] = useState([]);

	useEffect(() => {
		const cargarData = async () => {
			try {
				//let response = await axios(dataPacientes);
				// setPacientes(response.data);
				let response = dataPacientes;
				setPacientes(response);
			} catch (error) {
				console.log("error", error);
			}
		};
		cargarData();
		return () => {
			setPacientes([]);
		};
	}, []);

	return (
		<div>
			<h1 className="text-center" style={{ color: "#14279B" }}>
				Pacientes
			</h1>
			<table className="table table-hover">
				<thead>
					<tr style={{ color: "#3D56B2" }}>
						<td>ID</td>
						<td>Nombre</td>
						<td>Apellido</td>
						<td>Dni</td>
						<td>Fecha Ingreso</td>
						<td>Domicilio</td>
					</tr>
				</thead>
				<tbody>
					{pacientes.map((paciente) => (
						<tr key={paciente.id}>
							<td>{paciente.id}</td>
							<td>{paciente.nombre}</td>
							<td>{paciente.apellido}</td>
							<td>{paciente.dni}</td>
							<td>{paciente.fechaIngreso}</td>
							<td>{paciente.domicilio.provincia}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PacienteComponent;
