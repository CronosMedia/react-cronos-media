import "./heading.scss";

const Heading = (props) => {
	return (
		<div className="heading-container">
			<h2 className="heading">
				{props.heading}
				<span>.</span>
			</h2>
		</div>
	);
};

export default Heading;
