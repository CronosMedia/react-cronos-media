import "./category-card-album.scss";

const CategoryCardAlbum = (props) => {
	return (
		<div className="card">
			<a href="/">
				<div className="grow">
					<img
						src={`/assets/${props.albumImageUrl}`}
						alt=""
						className="img-card"
					/>
				</div>
				<div className="overlay-card">
					<h3>{props.albumTitle}</h3>
					<p>{props.albumDescription}</p>
				</div>
			</a>
		</div>
	);
};

export default CategoryCardAlbum;
