import { Link } from "react-router-dom";
import "./menu-full.scss";

const MenuFull = () => {
	return (
		<div className="full-menu">
			<Link to={"/editorial"}>Editorial</Link>
			<Link to={"/sport"}>Sport</Link>
			<Link to={"/creative"}>Creative</Link>
			<Link to={"/blog"}>Blog</Link>
		</div>
	);
};

export default MenuFull;
