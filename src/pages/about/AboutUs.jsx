import { useState } from "react";

import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./about.scss";
import bckimage from "../../img/caiac-1.jpg";
import aboutData from "./aboutData";
import CardButton from "../../components/cardbutton/CardButton";
import { Link } from "react-router-dom";

const AboutUs = (props) => {
	const cardElements = aboutData.map((item) => {
		return <CardButton key={item.id} {...item} />;
	});
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="section">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="content-wrapper">
				<h1>Despre noi</h1>
				<p>
					Cronos este o agenție de stock photo care furnizează unele
					dintre cele mai bune imagini din industrie!
				</p>
				<p>
					Agenția noastră acoperă principalele evenimente care au loc
					în România (sport, politică etc.). Deținem drepturi
					exclusive de distribuție a întregii producții foto prin
					parteneriate cu agenții din Marea Britanie, Germania, și
					Cehia. Avem, de asemenea, parteneriate cu fotografi
					independenți din toată Europa.
				</p>
				<p>
					Pe site-ul nostru veți găsi o varietate mare de fotografii
					din diverse domeniii precum politică, stil de viață,
					material editorial, călătorii etc.
				</p>
			</div>

			<div
				className="bestoffer"
				style={{
					backgroundImage: `url(${bckimage})`,
					minHeight: "60vh",
				}}>
				<div className="text-wrapper">
					<div className="heading">
						<h2>
							{bestOffer.title}
							<span>.</span>
						</h2>
						<p>{bestOffer.desc}</p>
						<div className="button">
							<Link to={bestOffer.btnUrl}>{bestOffer.btn}</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="heading-container">
				<h2 className="heading">
					CRONOS, imagini cu impact
					<span>.</span>
				</h2>
			</div>
			<div className="featured-gallery">{cardElements}</div>
			<Footer />
		</div>
	);
};

const bestOffer = {
	title: "Imagini pentru Media, Sport și Branduri",
	desc: "Răsfoiește arhiva noastră de imagini",
	btn: "Vezi Imaginile",
	btnUrl: "/categorii",
};

export default AboutUs;
