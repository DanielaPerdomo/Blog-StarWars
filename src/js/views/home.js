import React, {useContext} from "react"; 
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";


export const Home = () => {
	
	const {store, actions} = useContext(Context)
	return(
	// Contenedor Padre de lo personajes "Characters"
	<>
		<div className="text-center mt-5">
			<h1>Characters</h1>
			{store.characters.map((character) => {
				return(<Cards img={rigoImage} item={character.properties} key={character._id} />)
				})}
			
		</div>

		<div className="Planets">

		</div>
	</>
	);
};
