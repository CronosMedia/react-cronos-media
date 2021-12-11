import { Link } from "react-router-dom";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
	return (
		<div
			className={"overlay " + (menuOpen && "active")}
			onClick={() => setMenuOpen(false)}>
			<div className={"menu " + (menuOpen && "active")}>
				<ul>
					<li onClick={() => setMenuOpen(false)}>
						<Link to="/editorial">Editorial</Link>
					</li>
					<li onClick={() => setMenuOpen(false)}>
						<Link to="/sport">Sport</Link>
					</li>
					<li onClick={() => setMenuOpen(false)}>
						<Link to="/creative">Creative</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
