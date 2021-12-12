import { Link } from "react-router-dom";
import "./card-button.scss";

const CardButton = (props) => {
	return (
		<div className="card-btn">
			<img src={`./assets/${props.imageUrl}`} alt="" />
			<div className="text">
				<h2>
					{props.title}
					<span>.</span>
				</h2>
				<p>{props.desc}</p>
			</div>
			<Link to={props.btnUrl} className="button">
				{props.btnLabel}
			</Link>
		</div>
	);
};

export default CardButton;
