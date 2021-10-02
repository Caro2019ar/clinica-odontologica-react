import React, { useState } from "react";
import axios from "axios";

const urlOdonto = "http://localhost:8080/odontologos";

const InputOdonto = () => {
	const [state, setState] = useState({
		nombre: "",
		apellido: "",
		matricula: "",
	});

	const handleSubmit = (event) => {

		event.preventDefault();
		const payload = {
			nombre: state.nombre,
			apellido: state.apellido,
			matricula: state.matricula,
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
		const refreshPage = () => {
			window.location.reload();
		};
		refreshPage();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Agregar odontologo</h1>
				<p>Nombre</p>
				<input
					type="text"
					name="nombre"
					onChange={(event) => {
						setState((state) => ({ ...state, nombre: event.target.value }));
					}}
				/>
				<p>Apellido</p>
				<input
					type="text"
					name="apellido"
					onChange={(event) => {
						setState((state) => ({ ...state, apellido: event.target.value }));
					}}
				/>
				<p>Matricula</p>
				<input
					type="number"
					name="matricula"
					onChange={(event) => {
						setState((state) => ({ ...state, matricula: event.target.value }));
					}}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default InputOdonto;
