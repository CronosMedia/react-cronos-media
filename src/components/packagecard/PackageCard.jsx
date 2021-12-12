import { Link } from "react-router-dom";
import "./package-card.scss";

const PackageCard = (props) => {
	return (
		<div className="package-card">
			<div
				className={props.title === "Medium" ? "title medium" : "title"}>
				<p>{props.title}</p>
				<h2>{props.credits}</h2>
			</div>
			<div className="options">
				<p>{props.desc}</p>
			</div>

			<div className="price">
				<h3>{props.price}</h3>
			</div>

			<Link to={props.btnUrl} className="package-btn">
				{props.btnText}
			</Link>
		</div>
	);
};

export default PackageCard;
