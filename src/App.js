import { useState } from "react";
import BestOffer from "./components/bestoffer/BestOffer";

import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Heading from "./components/heading/Heading";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
import MenuFull from "./components/menufull/MenuFull";
import {
	bestOfferHome,
	creativeAlbumsHome,
	creativeTextHome,
	editorialAlbumsHome,
	editorialTextHome,
	headingHome,
	heroHome,
	sportAlbumsHome,
	sportTextHome,
} from "./data";
import backImg from "./img/painted-hands.jpg";
import backImgHero from "./img/formula-1-img-1.JPG";
import CategoryCard from "./components/categorycard/CategoryCard";
import CategoryCardAlbum from "./components/categorycardalbum/CategoryCardAlbum";
import "./global.scss";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	const heroHomelModule = heroHome.map((item) => {
		return <Hero key={item.id} {...item} backImg={backImgHero} />;
	});

	const cardElementsHome = bestOfferHome.map((item) => {
		return <BestOffer key={item.id} {...item} backImg={backImg} />;
	});

	const headingText = headingHome.map((item) => {
		return <Heading key={item.id} {...item} />;
	});

	const editorialTitle = editorialTextHome.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const editorialAlbums = editorialAlbumsHome.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const sportTitle = sportTextHome.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const sportAlbums = sportAlbumsHome.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	const creativeTitle = creativeTextHome.map((item) => {
		return <CategoryCard key={item.id} {...item} />;
	});

	const creativeAlbums = creativeAlbumsHome.map((item) => {
		return <CategoryCardAlbum key={item.id} {...item} />;
	});

	return (
		<div className="app">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			{heroHomelModule}
			<MenuFull />
			{headingText}
			<Featured />
			{cardElementsHome}
			<div className="editorial">
				{editorialTitle}
				{editorialAlbums}
			</div>
			<div className="editorial">
				{sportTitle}
				{sportAlbums}
			</div>
			<div className="editorial">
				{creativeTitle}
				{creativeAlbums}
			</div>
			<Footer />
		</div>
	);
}

export default App;
