import "./categorycard.scss";

const CategoryCard = (props) => {
	return (
		<div className="category-card">
			<div className="wrapper">
				<h3 className="category-title">
					{props.sectionTitle}
					<span>.</span>
				</h3>
				<p className="category-desc">{props.sectionDescription}</p>
				<div className="button">
					<a href={`/${props.btnLinkUrl}`}>{props.btnText}</a>
				</div>
			</div>
		</div>
	);
};

export default CategoryCard;
