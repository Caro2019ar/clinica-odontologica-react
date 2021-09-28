import React, { useState } from "react";
import axios from "axios";

const urlTurnos = "http://localhost:8080/turnos";

const InputTurno = () => {
	const [pacienteId, setPacienteId] = useState("");
	const [odontologoId, setOdontologoId] = useState("");
	const [fecha, setFecha] = useState("");

	const handleChange = (event) => {
		const target = event.target;
		const seteo =
			target.name === "pacienteId"
				? setPacienteId(target.value)
				: target.name === "odontologoId"
				? setOdontologoId(target.value)
				: target.name === "fecha"
				? setFecha(target.value)
				: "";
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			paciente: { id: pacienteId },
			odontologo: { id: odontologoId },
			date: fecha,
		};
		axios({
			url: urlTurnos,
			method: "post",
			data: payload,
		})
			.then(() => {
				console.log("Enviado para el Back");
			})
			.catch(() => {
				console.log("Catch do axios");
			});
		document.querySelector("form").reset();
	};
	console.log("Odontologo, dados: ", pacienteId, odontologoId, fecha);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Formulario</h1>
				<p>ID del paciente</p>
				<input type="number" name="pacienteId" onChange={handleChange} />
				<p>ID del odontologo</p>
				<input type="number" name="odontologoId" onChange={handleChange} />
				<p>Fecha del turno</p>
				<input type="text" name="fecha" onChange={handleChange} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default InputTurno;
