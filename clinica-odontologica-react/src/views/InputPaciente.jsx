import React, { useState } from "react";
import axios from "axios";

const urlPaciente = "http://localhost:8080/pacientes";

const InputPaciente = () => {
	const [state, setState] = useState({
		nombre: "",
		apellido: "",
		dni: "",
		domicilio: { calle: "", numero: "", localidad: "", provincia: "" },
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("prov", state.domicilio.provincia);
		const payload = {
			nombre: state.nombre,
			apellido: state.apellido,
			dni: state.dni,
			domicilio: {
				calle: state.domicilio.calle,
				numero: state.domicilio.numero,
				localidad: state.domicilio.localidad,
				provincia: state.domicilio.provincia,
			},
		};
		axios({
			url: urlPaciente,
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

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Formulario</h1>
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
				<p>DNI</p>
				<input
					type="number"
					name="dni"
					onChange={(event) => {
						setState((state) => ({ ...state, dni: event.target.value }));
					}}
				/>
				<p>Calle</p>
				<input
					type="text"
					name="calle"
					onChange={(event) => {
						setState((state) => ({
							...state,
							domicilio: { ...state.domicilio, calle: event.target.value },
						}));
					}}
				/>
				<p>Numero</p>
				<input
					type="text"
					name="numero"
					onChange={(event) => {
						setState((state) => ({
							...state,
							domicilio: { ...state.domicilio, numero: event.target.value },
						}));
					}}
				/>

				<p>Provincia</p>
				<input
					type="text"
					name="provincia"
					onChange={(event) => {
						setState((state) => ({
							...state,
							domicilio: { ...state.domicilio, provincia: event.target.value },
						}));
					}}
				/>
				<p>Localidad</p>
				<input
					type="text"
					name="localidad"
					onChange={(event) => {
						setState((state) => ({
							...state,
							domicilio: { ...state.domicilio, localidad: event.target.value },
						}));
					}}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default InputPaciente;
