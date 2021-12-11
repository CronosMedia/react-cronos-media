import "./navbar.scss";

import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
	return (
		<div className={"navbar " + (menuOpen && "active")}>
			<div className="left">
				<div className="wrapper">
					<div
						className="hamburger"
						onClick={() => setMenuOpen(!menuOpen)}>
						<span className="line1"></span>
						<span className="line2"></span>
						<span className="line3"></span>
					</div>
					<div
						className="menu-text"
						onClick={() => setMenuOpen(!menuOpen)}>
						Categorii
					</div>
				</div>
				<div className="menu-text">
					<Link to="/preturi">Prețuri</Link>
				</div>
			</div>
			<div className="center">
				<Link to="/">
					<span className="cronos">cronos</span>
					<span className="point">.</span>
				</Link>
			</div>
			<div className="right">
				<div className="cart">
					<Link to="/cos" className="lnk">
						<span className="icon">
							<ShoppingCart />
						</span>
						<span className="menu-text">Coș</span>
					</Link>
				</div>
				<Link to="/sign-in" className="sign-in menu-text">
					Contul Meu
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
