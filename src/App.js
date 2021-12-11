import { useState } from "react";
import BestOffer from "./components/bestoffer/BestOffer";
import Categories from "./components/categories/Categories";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Heading from "./components/heading/Heading";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="app">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Hero />
			<Heading />
			<Featured />
			<BestOffer />
			<Categories />
			<Footer />
		</div>
	);
}

export default App;
