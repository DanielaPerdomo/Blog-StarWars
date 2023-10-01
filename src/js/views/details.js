import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Details = () => {
	const { store, actions } = useContext(Context);
	const { nature, id } = useParams()
	const [item, setItem] = useState({})
	const getItem = () => {
		const item = store[nature].find(element => element.uid == id)
		return item
	}
	useEffect(() => {
		setItem(getItem())
	}, [store[nature]])

	return (
		<div className="container">
			<div className="card mb-3 bg-dark text-light vh-80 d-flex justify-content-center pt-5" style={{ minWidth: "20rem" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"> {item?.properties?.name} </h5>
							<p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
						</div>
					</div>
				</div>
				<hr style={{ borderTop: "2px solid red", margin: "10px 0" }} />
				<div className="datawrap text-center p-3">
					<div className="row">
						<div className="col-md-2">
							<div className="row"><strong>Name</strong></div>
							<div className="row justify-content-center"></div>
						</div>
						<div className="col-md-2">
							<div className="row"><strong>Birth Year</strong></div>
							<div className="row justify-content-center"></div>
						</div>
						<div className="col-md-2">
							<div className="row"><strong>Gender</strong></div>
							<div className="row justify-content-center"></div>
						</div>
						<div className="col-md-2">
							<div className="row"><strong>Height</strong></div>
							<div className="row justify-content-center"></div>
						</div>
						<div className="col-md-2">
							<div className="row"><strong>Skin Color</strong></div>
							<div className="row justify-content-center"></div>
						</div>
						<div className="col-md-2">
							<div className="row"><strong>Eye Color</strong></div>
							<div className="row justify-content-center"></div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};
