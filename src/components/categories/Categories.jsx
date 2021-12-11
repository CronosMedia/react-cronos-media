import Editorial from "../editorial/Editorial";
import Sport from "../sport/Sport";
import Creative from "../creative/Creative";
import "./categories.scss";

const Categories = () => {
	return (
		<div className="categories">
			<Editorial />
			<Sport />
			<Creative />
		</div>
	);
};

export default Categories;
