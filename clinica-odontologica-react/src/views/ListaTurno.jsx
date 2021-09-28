import React, { useState, useEffect } from "react";
import SectionTitle from "../components/layout/SectionTitle";
import axios from "axios";
const dataTurnos = "http://localhost:8080/turnos";
//import dataTurnos from "../data/dataTurnos.json";
const ListaTurno = () => {
	const [turnos, setturnos] = useState([]);

	useEffect(() => {
		const cargarData = async () => {
			try {
				let response = await axios(dataTurnos);
				setturnos(response.data);
				//let response = dataTurnos;
				//setturnos(response);
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
			<SectionTitle title="Turnos" />
			<div className="center">
				<table className="table table-hover">
					<thead>
						<tr style={{ color: "#3D56B2" }}>
							<td>ID del Paciente</td>
							<td>Nombre del Paciente</td>
							<td>Apellido del Paciente</td>
							<td>ID del Odontologo</td>
							<td>Nombre del Odontologo</td>
							<td>Apellido del Odontologo</td>
							<td>Fecha y Hora del turno</td>
						</tr>
					</thead>
					<tbody>
						{turnos.map((turno) => (
							<tr key={turno.id}>
								<td>{turno.paciente.id}</td>
								<td>{turno.paciente.nombre}</td>
								<td>{turno.paciente.apellido}</td>
								<td>{turno.odontologo.id}</td>
								<td>{turno.odontologo.nombre}</td>
								<td>{turno.odontologo.apellido}</td>
								<td>{turno.date}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListaTurno;
