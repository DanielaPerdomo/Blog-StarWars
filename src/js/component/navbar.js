import React from "react";
import { Link } from "react-router-dom";
import starwarsImage from "../../img/star-wars.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<p>
				<img className="icon h-50 d-inline-block" src={starwarsImage}  />
			</p>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							<li><button className="dropdown-item" type="button">Acción</button></li>
							<li><button className="dropdown-item" type="button">Otra acción</button></li>
							<li><button className="dropdown-item" type="button">Algo más aqui</button></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
