import React from "react";
import { useState, useEffect } from "react";

const NavBar = () => {
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

	if (anchoPantalla > 596) {
		return (
			<nav className="navbar navbar-light bg-dark fixed-top">
				<a className="navbar-brand px-3 text-light" href="#">
					Start Bootstrap
				</a>
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link active text-light" href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		);
	} else {
		return (
			<nav className="navbar navbar-light bg-dark fixed-top">
				<a className="navbar-brand px-3 text-light" href="#">
					Start Bootstrap
				</a>
				<ul className="nav justify-content-end">
					<li class="nav-item dropdown dropstart">
						<button
							className="btn btn-dark text-secondary"
							type="button"
							id="dropdownMenuButton2"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							<i className="fas fa-bars fa-1x"></i>
						</button>
						<ul
							class="dropdown-menu dropdown-menu-dark"
							aria-labelledby="navbarDropdown">
							<li>
								<a className="dropdown-item active" href="#">
									Home
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									About
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Services
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Contact
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		);
	}
};

export default NavBar;
