import React from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<a className="navbar-brand px-3 text-light" href="#">
				Start Bootstrap
			</a>
			<ul class="nav justify-content-end">
				<li class="nav-item">
					<a class="nav-link active text-light" href="#">
						Home
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-secondary" href="#">
						About
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-secondary" href="#">
						Services
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link text-secondary" href="#">
						Contact
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" href="#">
						Disabled
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
