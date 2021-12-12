import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import PriceCard from "../../components/pricecard/PriceCard";
import "./prices.scss";
import pricesData from "./pricesData";
import packagesData from "./packagesData";
import PackageCard from "../../components/packagecard/PackageCard";

const Prices = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	const singlePrices = pricesData.map((item) => {
		return <PriceCard key={item.id} {...item} />;
	});

	const packagePrices = packagesData.map((item) => {
		return <PackageCard key={item.id} {...item} />;
	});
	return (
		<div className="section">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="content-wrapper">
				<h1>Cronos - Licențe, Prețuri și Pachete</h1>
				<p>
					CRONOS oferă flexibilitate totală în ceea ce privește
					prețurile: puteți achiziționa orice imagine folosind unul
					dintre pachetele noastre sau ca o licență unică.
				</p>
				<p>
					Pachetele vă facilitează cumpărați credite pentru orice tip
					de imagine sau tip de licență după dorință.
				</p>
				<p>
					Pentru întrebări referitoare la licențe sau pachete, precum
					și pentru pachete personalizate individual, cu servicii sau
					condiții suplimentare, ne puteți contacta.
				</p>
			</div>
			<div className="prices-container">
				<div className="bloc-tabs">
					<button
						className={
							toggleState === 1 ? "tabs active-tabs" : "tabs"
						}
						onClick={() => toggleTab(1)}>
						Licențe Individuale
					</button>
					<button
						className={
							toggleState === 2 ? "tabs active-tabs" : "tabs"
						}
						onClick={() => toggleTab(2)}>
						Pachete
					</button>
				</div>

				<div className="content-tabs">
					<div
						className={
							toggleState === 1
								? "content  active-content"
								: "content"
						}>
						<div className="price-cards">{singlePrices}</div>
					</div>

					<div
						className={
							toggleState === 2
								? "content  active-content"
								: "content"
						}>
						<div className="package-cards">{packagePrices}</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Prices;
