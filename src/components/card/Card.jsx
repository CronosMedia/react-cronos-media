import "./card.scss";

const Card = (props) => {
	return (
		<div className="card">
			<a href="/">
				<div className="grow">
					<img
						src={`/assets/${props.imageUrl}`}
						alt=""
						className="img-card"
					/>
				</div>
				<div className="overlay-card">
					<h3>{props.title}</h3>
					<p>{props.description}</p>
				</div>
			</a>
		</div>
	);
};

export default Card;
