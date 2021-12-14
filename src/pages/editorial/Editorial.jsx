import { useState } from "react";
import BestOffer from "../../components/bestoffer/BestOffer";
import Card from "../../components/card/Card";
import Heading from "../../components/heading/Heading";
import Hero from "../../components/hero/Hero";
import Menu from "../../components/menu/Menu";
import MenuFull from "../../components/menufull/MenuFull";
import Navbar from "../../components/navbar/Navbar";
import {
	bestOfferEditorial,
	editorial,
	entertainmentAlbumsEditorial,
	entertainmentTextEditorial,
	globalAlbumsEditorial,
	globalTextEditorial,
	headingEditorial,
	heroEditorial,
	politicsAlbumsEditorial,
	politicsTextEditorial,
} from "../../data";
import "../../global.scss";
import backImg from "../../img/taksim-1.jpg";
import backImgOffer from "../../img/hands-1.jpg";
import CategoryCard from "../../components/categorycard/CategoryCard";
import CategoryCardAlbum from "../../components/categorycardalbum/CategoryCardAlbum";
import Footer from "../../components/footer/Footer";

const Editorial = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const heroEditorialModule = heroEditorial.map((item) => {
		return <Hero key={item.id} {...item} backImg={backImg} />;
	});

	const headingText = headingEditorial.map((item) => {
		return <Heading key={item.id} {...item} />;
	});

	const cardElements = editorial.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	const cardElementsBestOffer = bestOfferEditorial.map((item) => {
		return <BestOffer key={item.id} {...item} backImg={backImgOffer} />;
	});

	const politcsTitle = politicsTextEditorial.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const latestAlbum = politicsAlbumsEditorial.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const globallTitle = globalTextEditorial.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const globalAlbums = globalAlbumsEditorial.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const entertainmentTitle = entertainmentTextEditorial.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const entertainmentAlbums = entertainmentAlbumsEditorial.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});
	return (
		<div className="editorial-page">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

			{heroEditorialModule}

			<MenuFull />
			{headingText}
			<div className="featured">{cardElements}</div>
			{cardElementsBestOffer}
			<div className="editorial">
				{politcsTitle}
				{latestAlbum}
			</div>
			<div className="editorial">
				{globallTitle}
				{globalAlbums}
			</div>
			<div className="editorial">
				{entertainmentTitle}
				{entertainmentAlbums}
			</div>
			<Footer />
		</div>
	);
};

export default Editorial;
