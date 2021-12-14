import "./featured.scss";
import Card from "../card/Card";
import { featured } from "../../data";

const Featured = () => {
	const cardElements = featured.map((item, index) => {
		return <Card key={item.id} {...item} />;
	});
	return <div className="featured">{cardElements}</div>;
};

export default Featured;
