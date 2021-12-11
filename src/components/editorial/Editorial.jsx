import "./editorial.scss";
import editorialData from "./editorialData";
import CategoryCard from "../categorycard/CategoryCard";
import EditorialCard from "./EditorialCard";
import categoryNameData from "./categoryNameData";

const Editorial = () => {
	const editorialTitle = categoryNameData.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});
	const latestAlbum = editorialData.map((item) => {
		return <EditorialCard key={item.id} {...item} />;
	});
	return (
		<div className="editorial">
			{editorialTitle}
			{latestAlbum}
		</div>
	);
};

export default Editorial;
