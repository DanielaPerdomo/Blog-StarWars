import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import starwarsImage from "../../img/star-wars.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark ">
			<Link to="/">
				<img className="icon h-50 d-inline-block" src={starwarsImage} />
			</Link>
			<div className="">
				<div className="dropdown ">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						data-bs-auto-close="false"
						aria-expanded="false">
						Favorites
						<span className="badge badge-dark">{store.favorites.length}</span>
					</button>
					<div className="dropdown-menu dropdown-menu-end">
						{store.favorites.length > 0 ? (
							store.favorites.map((name, index) => (
								<div
									key={index}
									className="wrap d-flex justify-content-around">
									<span
										className="dropdown-item">
										{name}
									</span>
									<button
										type="button" 
										className="btn btn-light pr-2"
										onClick={() => {
											actions.deleteFavorites(index);
										}}
									>
										<i className="fa-solid fa-trash"></i>
									</button>
								</div>
							))
						) : (
							<span className="dropdown-item ">Empty</span>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
