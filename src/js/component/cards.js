import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
// import "../../styles/home.css";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";


export const Cards = (props) => {
	const { actions } = useContext(Context)
	const navigate = useNavigate()
	const addFavorites = (characterName) => {
		actions.addFavorites(characterName);
	}
	const { name, gender, hair_color, eye_color, population, terrain } = props.item;
	const errorHandler = (event) => {
		event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
	}
	return (
		<div className="card bg-secondary" style={{ minWidth: "20rem" }}>
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

				<div className="btnSection d-flex justify-content-between pt-2 align-item-end mt-5">
					<Link to={`/details/${props.type}/${props.id}`} className="btn btn-outline-dark  border border-dark border-3 align-item-end float-start"> Learn More! </Link>

					<button
						type="button"
						className="btn btn-outline-warning border border-warning border-3  float-end" 
						onClick={() => {
							addFavorites(props.name);
						}}
						><i className="iconFav fa-regular fa-heart" /></button>
				</div>
			</div>
		</div>
	)
};