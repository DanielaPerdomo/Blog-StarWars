import React from "react";
import { Link } from "react-router-dom";
import starwarsImage from "../../img/star-wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<p>
				<img src={starwarsImage} />
			</p>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
