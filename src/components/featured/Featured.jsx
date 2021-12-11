import "./featured.scss";
import Card from "../card/Card";
import data from "../../data";

const Featured = () => {
	const cardElements = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});
	return <div className="featured">{cardElements}</div>;
};

export default Featured;
