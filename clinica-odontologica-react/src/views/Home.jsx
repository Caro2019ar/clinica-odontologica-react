import React from "react";
import PageTitle from "../components/layout/PageTitle";

const Home = (props) => (
	<div className="Home">
		<PageTitle
			title="Clinica Odontologica"
			subtitle="Proyecto Back end - CTD"
		/>
		<img src="foto.jpeg" alt="foto" />
	</div>
);

export default Home;
