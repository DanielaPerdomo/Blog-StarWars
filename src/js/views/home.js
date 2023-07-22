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
					return (<Cards img={rigoImage} item={character.properties} key={character._id} type={"people"} />)
				})}

			</div>

			{/* Contenedor Padre de lo planetas "Planets" */}
			<div className="Planets">
				<h1 className="tittleCharacter text-danger"><strong>Planets</strong></h1>
				<div className="fatherCharacter d-flex text-center mt-5">
					{store.planets.map((planets) => {
						return (<Cards img={rigoImage} item={planets.properties} key={planets._id} type={"planets"} />)
					})}

				</div>

			</div>
		</>
	);
};
