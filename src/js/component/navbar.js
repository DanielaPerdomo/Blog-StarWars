import React from "react";
import { Link } from "react-router-dom";
import starwarsImage from "../../img/star-wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img className="icon h-50 d-inline-block" src={starwarsImage} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group">
						<button type="button" className="btn btn-lg btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<i className="fa-solid fa-heart"></i>
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							<li><button className="dropdown-item" type="button">Acción<i className="fa-solid fa-trash-can"></i></button></li>
							<li><button className="dropdown-item" type="button">Otra acción<i className="fa-solid fa-trash-can"></i></button></li>
							<li><button className="dropdown-item" type="button">Algo más aqui<i className="fa-solid fa-trash-can"></i></button></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
