import "./editorial.scss";
import creativeData from "./creativeData";
import CategoryCard from "../categorycard/CategoryCard";
import EditorialCard from "./EditorialCard";
import categoryNameData from "./categoryNameData";

const Creative = () => {
	const editorialTitle = categoryNameData.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});
	const latestAlbum = creativeData.map((item) => {
		return <EditorialCard key={item.id} {...item} />;
	});
	return (
		<div className="editorial">
			{editorialTitle}
			{latestAlbum}
		</div>
	);
};

export default Creative;
