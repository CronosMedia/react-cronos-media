import "./price-card.scss";

const PriceCard = (props) => {
	return (
		<div className="price-card">
			<div className="title">
				<h2>{props.title}</h2>
				<p>{props.subtitle}</p>
			</div>
			<div className="price">
				<h3>{props.price} €</h3>
			</div>
			<div className="options">
				<p>
					Rezoluție: <span>{props.resolution}</span>
				</p>
				<p>
					Utilizare: <span>{props.license}</span>
				</p>
				<p>
					Distribuție: <span>{props.distribution}</span>
				</p>
				<p>
					Utilizare Multiplă: <span>{props.multiSeat}</span>
				</p>
			</div>
		</div>
	);
};

export default PriceCard;
