import React, { useState, useEffect } from "react";
import axios from "axios";
import SectionTitle from "../components/layout/SectionTitle";

const dataPacientes = "http://localhost:8080/pacientes";

const ListaPaciente = () => {
	const [pacientes, setPacientes] = useState([]);

	useEffect(() => {
		const cargarData = async () => {
			try {
				let response = await axios({
					method: "get",
					url: dataPacientes,
				});
				setPacientes(response.data);
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
			<SectionTitle title="Pacientes" />
			<div className="center">
				<table className="table table-hover">
					<thead>
						<tr style={{ color: "#3D56B2" }}>
							<td>ID</td>
							<td>Nombre</td>
							<td>Apellido</td>
							<td>Dni</td>
							<td>Fecha Ingreso</td>
							<td>Provincia</td>
						</tr>
					</thead>
					<tbody>
						{pacientes.map((paciente) => (
							<tr key={paciente.id}>
								<td>{paciente.id}</td>
								<td>{paciente.nombre}</td>
								<td>{paciente.apellido}</td>
								<td>{paciente.dni}</td>
								<td>{paciente.fechaHoraIngreso}</td>
								<td>{paciente.domicilio.provincia}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ListaPaciente;
