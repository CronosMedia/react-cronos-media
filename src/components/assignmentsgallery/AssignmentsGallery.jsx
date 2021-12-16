import "./assignments-gallery.scss";

const AssignmentsGallery = (props) => {
	return (
		<div className="assignments-gallery">
			<img
				src={`/assets/${props.imageUrl}`}
				alt=""
				className="img-card"
			/>
		</div>
	);
};

export default AssignmentsGallery;
