import "./bestoffer.scss";

const BestOffer = (props) => {
	return (
		<div
			className="bestoffer"
			style={{
				backgroundImage: `url(${props.backImg})`,
				minHeight: "60vh",
			}}>
			<div className="text-wrapper">
				<div className="heading">
					<h2>
						{props.title}
						<span>.</span>
					</h2>
					<p>
						{props.desc1} <br />
						{props.desc2}
					</p>
					<div className="button">
						<a href="/preturi">{props.btn}</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestOffer;
