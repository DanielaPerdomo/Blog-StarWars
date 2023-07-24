import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import starwarsImage from "../../img/star-wars.png";

export const Home = () => {

	const { store, actions } = useContext(Context)
	return (
		// Contenedor Padre de lo personajes "Characters"
		<>
			<h1 className="tittleCharacter text-danger"><strong>Characters</strong></h1>
			<div className="fatherCharacter d-flex text-center mt-5">
			{store.characters.map((character) => {
					return (<Cards img={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} item={character.properties} key={character._id} type={"character"} />)})}
			</div>

			{/* Contenedor Padre de lo planetas "Planets" */}
			<div className="Planets">
				<h1 className="tittleCharacter text-danger"><strong>Planets</strong></h1>
				<div className="fatherCharacter d-flex text-center mt-5">
				{store.planets.map((planet) => {
					return (<Cards img={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} item={planet.properties} key={planet._id} type={"planets"} />)})}

				</div>

			</div>
		</>
	);
};
