import React, { Component } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";

export const Cards = (props) => {
	const { name, gender, hair_color, eye_color } = props.item
	return (
		<div className="card" style={{ minWidth: "18rem" }}>
			<img src={`${props.img}`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">Gender: {gender}</p>
				<p className="card-text">Eye-Color: {eye_color}</p>
				<p className="card-text">Hair-Color: {hair_color}</p>
				<a href="#" className="btn btn-primary">Learn More!</a>
				<i class="fa-regular fa-heart"></i>
			</div>
		</div>
	)
};
