import { useState } from "react";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/search/SearchBar";
import "./sport.scss";
import bckimage from "../../img/fotbal-1.JPG";
import Heading from "../../components/heading/Heading";
import {
	bestOfferSport,
	fotbalTextSport,
	sport,
	fotbalAlbumsSport,
	globalTextSport,
	globalAlbumsSport,
	archiveTextSport,
	archiveAlbumsSport,
	headingSport,
} from "../../data";
import Card from "../../components/card/Card";
import MenuFull from "../../components/menufull/MenuFull";
import BestOffer from "../../components/bestoffer/BestOffer";
import backImg from "../../img/hands.jpg";
import Footer from "../../components/footer/Footer";
import CategoryCard from "../../components/categorycard/CategoryCard";
import CategoryCardAlbum from "../../components/categorycardalbum/CategoryCardAlbum";

const Sport = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const cardElements = sport.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	const cardElementsBestOffer = bestOfferSport.map((item) => {
		return <BestOffer key={item.id} {...item} backImg={backImg} />;
	});

	const headingText = headingSport.map((item) => {
		return <Heading key={item.id} {...item} />;
	});

	const footballTitle = fotbalTextSport.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const latestAlbum = fotbalAlbumsSport.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const globallTitle = globalTextSport.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const globalAlbums = globalAlbumsSport.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const archivelTitle = archiveTextSport.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const archiveAlbums = archiveAlbumsSport.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	return (
		<div className="sport">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div
				className="hero"
				style={{
					backgroundImage: `url(${bckimage})`,
					minHeight: "90vh",
				}}>
				<div className="container">
					<h1>
						<div className="cronos">
							Cronos <span className="point">.</span>
						</div>
						<p>Trăim pentru Sport.</p>
					</h1>
					<SearchBar />
				</div>
			</div>
			<MenuFull />
			{headingText}
			<div className="featured">{cardElements}</div>
			{cardElementsBestOffer}
			<div className="editorial">
				{footballTitle}
				{latestAlbum}
			</div>
			<div className="editorial">
				{globallTitle}
				{globalAlbums}
			</div>
			<div className="editorial">
				{archivelTitle}
				{archiveAlbums}
			</div>
			<Footer />
		</div>
	);
};

export default Sport;
