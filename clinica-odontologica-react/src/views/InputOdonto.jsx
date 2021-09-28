import React, { useState } from "react";
import axios from "axios";

const urlOdonto = "http://localhost:8080/odontologos";

const InputOdonto = () => {
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [matricula, setMatricula] = useState("");

	const handleChange = (event) => {
		const target = event.target;
		const seteo =
			target.name === "nombre"
				? setNombre(target.value)
				: target.name === "apellido"
				? setApellido(target.value)
				: target.name === "matricula"
				? setMatricula(target.value)
				: "";
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const payload = {
			nombre: nombre,
			apellido: apellido,
			matricula: matricula,
		};
		axios({
			url: urlOdonto,
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
	console.log("Odontologo, dados: ", nombre, apellido, matricula);
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Formulario</h1>
				<p>Nombre</p>
				<input type="text" name="nombre" onChange={handleChange} />
				<p>Apellido</p>
				<input type="text" name="apellido" onChange={handleChange} />
				<p>Matricula</p>
				<input type="number" name="matricula" onChange={handleChange} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default InputOdonto;
