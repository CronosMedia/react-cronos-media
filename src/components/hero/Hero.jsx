import "./hero.scss";

import SearchBar from "../search/SearchBar";
// import bckimage from "../../img/formula-1-img-1.JPG";

const Hero = (props) => {
	return (
		<div
			className="hero"
			style={{
				backgroundImage: `url(${props.backImg})`,
				minHeight: "90vh",
			}}>
			<div className="container">
				<h1>
					<div className="cronos">
						{props.heading} <span className="point">.</span>
					</div>
					<p>{props.text}</p>
				</h1>
				<SearchBar />
			</div>
		</div>
	);
};

export default Hero;
