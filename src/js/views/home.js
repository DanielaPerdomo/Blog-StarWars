import React, {useContext} from "react"; 
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";
import starwarsImage from "../../img/star-wars.png";

export const Home = () => {
	
	const {store, actions} = useContext(Context)
	return(
	// Contenedor Padre de lo personajes "Characters"
	<>
		<h1>Characters</h1>
		<div className="fatherCharacter d-flex text-center mt-5">
			{store.characters.map((character) => {
				return(<Cards img={rigoImage} item={character.properties} key={character._id} />)
				})}
			
		</div>

		<div className="Planets">

		</div>
	</>
	);
};
