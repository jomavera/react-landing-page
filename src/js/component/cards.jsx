import React from "react";
import { useState, useEffect } from "react";

const Cards = () => {
	const [anchoPantalla, setAnchoPatalla] = useState(1000);

	const handleResize = () => {
		setAnchoPatalla(
			Math.max(
				document.documentElement.clientWidth || 0,
				window.innerWidth || 0
			)
		);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
	}, []);
	console.log(anchoPantalla);
	if (anchoPantalla > 820) {
		return (
			<div className="row">
				<div className="col">
					<div className="card m-3">
						<img
							src="https://via.placeholder.com/500x325"
							className="card-img-top"
							alt="photo"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Donec ac erat ac nisi pharetra
								lobortis eget sed justo.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out Now!
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card m-3">
						<img
							src="https://via.placeholder.com/500x325"
							className="card-img-top"
							alt="photo"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Donec ac erat ac nisi pharetra
								lobortis eget sed justo.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out Now!
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card m-3">
						<img
							src="https://via.placeholder.com/500x325"
							className="card-img-top"
							alt="photo"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Donec ac erat ac nisi pharetra
								lobortis eget sed justo.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out Now!
							</a>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card m-3">
						<img
							src="https://via.placeholder.com/500x325"
							className="card-img-top"
							alt="photo"
						/>
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Donec ac erat ac nisi pharetra
								lobortis eget sed justo.
							</p>
							<a href="#" className="btn btn-primary">
								Find Out Now!
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="vstack">
				<div className="card m-3">
					<img
						src="https://via.placeholder.com/500x325"
						className="card-img-top"
						alt="photo"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec ac erat ac nisi pharetra lobortis eget
							sed justo.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out Now!
						</a>
					</div>
				</div>
				<div className="card m-3">
					<img
						src="https://via.placeholder.com/500x325"
						className="card-img-top"
						alt="photo"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec ac erat ac nisi pharetra lobortis eget
							sed justo.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out Now!
						</a>
					</div>
				</div>
				<div className="card m-3">
					<img
						src="https://via.placeholder.com/500x325"
						className="card-img-top"
						alt="photo"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec ac erat ac nisi pharetra lobortis eget
							sed justo.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out Now!
						</a>
					</div>
				</div>
				<div className="card m-3">
					<img
						src="https://via.placeholder.com/500x325"
						className="card-img-top"
						alt="photo"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec ac erat ac nisi pharetra lobortis eget
							sed justo.
						</p>
						<a href="#" className="btn btn-primary">
							Find Out Now!
						</a>
					</div>
				</div>
			</div>
		);
	}
};

export default Cards;
