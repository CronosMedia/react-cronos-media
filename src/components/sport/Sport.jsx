import "./editorial.scss";
import sportData from "./sportData";
import CategoryCard from "../categorycard/CategoryCard";
import EditorialCard from "./EditorialCard";
import categoryNameData from "./categoryNameData";

const Sport = () => {
	const editorialTitle = categoryNameData.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});
	const latestAlbum = sportData.map((item) => {
		return <EditorialCard key={item.id} {...item} />;
	});
	return (
		<div className="editorial">
			{editorialTitle}
			{latestAlbum}
		</div>
	);
};

export default Sport;
