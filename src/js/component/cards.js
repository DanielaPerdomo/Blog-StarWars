import React, { Component } from "react";
// import rigoImage from "../../img/rigo-baby.jpg";

export const Cards = (props) => {
	const { name, gender, hair_color, eye_color } = props.item
	return (
		<div className="card" style={{ minWidth: "18rem" }}>
			<img src={`${props.img}`} className="card-img-top" alt="..." />
			<div className="card-body">
				<h4 className="text-start"><strong> {name} </strong></h4>
				{/* <p className="text-start m-0" >Gender: {gender} </p>
				<p className="text-start m-0">Eye-Color: {eye_color} </p>
				<p className="text-start">Hair-Color: {hair_color} </p> */}
				{/* <div className="btnSection d-flex"> */}
				<a href="#" className="btn btn-light text-primary border border-primary border-3 float-start"> Learn More! </a>
				<button type="button" className="btn btn-light text-warning border border-warning border-3 float-end"><i class="iconFav fa-regular fa-heart" /></button>
				{/* </div> */}
			</div>
		</div>
	)
};

