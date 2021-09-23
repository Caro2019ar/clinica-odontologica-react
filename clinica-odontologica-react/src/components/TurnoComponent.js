import React, { useState, useEffect } from "react";
import axios from "axios";
import dataTurnos from "../data/dataTurnos.json";
//const dataTurnos = "http://localhost:8080/turnos";

const TurnoComponent = () => {
	const [turnos, setturnos] = useState([]);

	useEffect(() => {
		const cargarData = async () => {
			try {
				//let response = await axios(dataTurnos);
				// setturnos(response.data);
				let response = dataTurnos;
				setturnos(response);
			} catch (error) {
				console.log("error", error);
			}
		};
		cargarData();
		return () => {
			setturnos([]);
		};
	}, []);

	return (
		<div>
			<h1 className="text-center" style={{ color: "#14279B" }}>
				Turnos
			</h1>
			<table className="table table-hover">
				<thead>
					<tr style={{ color: "#3D56B2" }}>
						<td>ID del Paciente</td>
						<td>Nombre del Paciente</td>
						<td>ID del Odontologo</td>
						<td>Nombre del Odontologo</td>
						<td>Fecha y Hora del turno</td>
					</tr>
				</thead>
				<tbody>
					{turnos.map((turno) => (
						<tr key={turno.id}>
							<td>{turno.paciente.id}</td>
							<td>{turno.paciente.nombre}</td>
							<td>{turno.odontologo.id}</td>
							<td>{turno.odontologo.nombre}</td>
							<td>{turno.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TurnoComponent;
