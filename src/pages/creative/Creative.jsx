import { useState } from "react";
import BestOffer from "../../components/bestoffer/BestOffer";
import Heading from "../../components/heading/Heading";
import Hero from "../../components/hero/Hero";
import Menu from "../../components/menu/Menu";
import MenuFull from "../../components/menufull/MenuFull";
import Navbar from "../../components/navbar/Navbar";
import {
	bestOfferCreative,
	creative,
	diversityAlbumsCreative,
	diversityTextCreative,
	headingCreative,
	heroCreative,
	sportCreativeAlbumsCreative,
	sportCreativeTextCreative,
	wellnessAlbumsCreative,
	wellnessTextCreative,
} from "../../data";
import "../../global.scss";
import backImg from "../../img/diversity.jpg";
import backImgOffer from "../../img/creative-oferta.jpg";
import Card from "../../components/card/Card";
import CategoryCard from "../../components/categorycard/CategoryCard";
import CategoryCardAlbum from "../../components/categorycardalbum/CategoryCardAlbum";
import Footer from "../../components/footer/Footer";

const Creative = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const heroCreativeModule = heroCreative.map((item) => {
		return <Hero key={item.id} {...item} backImg={backImg} />;
	});

	const headingText = headingCreative.map((item) => {
		return <Heading key={item.id} {...item} />;
	});

	const cardElements = creative.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	const cardElementsBestOffer = bestOfferCreative.map((item) => {
		return <BestOffer key={item.id} {...item} backImg={backImgOffer} />;
	});

	const diversityTitle = diversityTextCreative.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const diversityAlbum = diversityAlbumsCreative.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const wellnessTitle = wellnessTextCreative.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const wellnessAlbums = wellnessAlbumsCreative.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const sportCreativeTitle = sportCreativeTextCreative.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const sportCreativeAlbums = sportCreativeAlbumsCreative.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});
	return (
		<div className="creative-page">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

			{heroCreativeModule}

			<MenuFull />

			{headingText}

			<div className="featured">{cardElements}</div>

			{cardElementsBestOffer}

			<div className="editorial">
				{diversityTitle}
				{diversityAlbum}
			</div>
			<div className="editorial">
				{wellnessTitle}
				{wellnessAlbums}
			</div>
			<div className="editorial">
				{sportCreativeTitle}
				{sportCreativeAlbums}
			</div>
			<Footer />
		</div>
	);
};

export default Creative;
