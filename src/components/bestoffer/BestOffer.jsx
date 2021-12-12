import "./bestoffer.scss";
import bckimage from "../../img/painted-hands.jpg";

const BestOffer = (props) => {
	return (
		<div
			className="bestoffer"
			style={{ backgroundImage: `url(${bckimage})`, minHeight: "60vh" }}>
			<div className="text-wrapper">
				<div className="heading">
					<h2>
						{bestOffer.title}
						<span>.</span>
					</h2>
					<p>
						{bestOffer.desc1} <br />
						{bestOffer.desc2}
					</p>
					<div className="button">
						<a href="/preturi">{bestOffer.btn}</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const bestOffer = {
	title: "Flexibilitate dusă la extrem",
	desc1: "Folosește imaginile noastre cu licență RM, RF și RF						Premium",
	desc2: "sau ca parte a unui pachet și bucură-te de o						flexibilitate completă a prețurilor.",
	btn: "Vezi Prețurile",
};

export default BestOffer;
