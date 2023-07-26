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
			<div className="card mb-3" style={{ maxWidth: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"> {item?.properties?.name} </h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
