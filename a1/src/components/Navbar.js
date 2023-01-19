import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h1>LDRS Investments Incorporated</h1>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About us</a>
				<a href="/#">Contact us</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;