import React, { Component } from "react";
import { Link } from "react-router-dom";
// import rigoImage from "../../img/rigo-baby.jpg";

export const Cards = (props) => {
	const { name, gender, hair_color, eye_color, population, terrain } = props.item;
	const errorHandler = (event) => {
		event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}
	return (
		<div className="card" style={{ minWidth: "20rem" }}>
			<img src={`${props.img}`} className="card-img-top" alt={`${name}`} onError={errorHandler} />
			<div className="card-body">
				<h4 className="text-start"><strong> {name} </strong></h4>
				{
					props.type == "planets" ? (
						<>
							<p className="text-start m-0" >Population: {population} </p>
							<p className="text-start m-0">Terrain: {terrain} </p>
						</>
					) : (
						<>
							<p className="text-start m-0" >Gender: {gender} </p>
							<p className="text-start m-0">Eye-Color: {eye_color} </p>
							<p className="text-start">Hair-Color: {hair_color} </p>
						</>
					)
				}

				<div className="btnSection d-flex">
					<Link to={`/details/${props.type}/${props.id}`} className="btn btn-light text-primary border border-primary border-3 float-start"> Learn More! </Link>
					<button type="button" className="btn btn-light text-warning border border-warning border-3 float-end"><i className="iconFav fa-regular fa-heart" /></button>
				</div>
			</div>
		</div>
	)
};