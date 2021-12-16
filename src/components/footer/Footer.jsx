import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-wrapper">
				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Oferte<span>.</span>
						</h3>
						<div className="column-items">
							<Link to="/preturi" className="item-link">
								Prețuri și Licențe
							</Link>
							<Link to="/categorii" className="item-link">
								Categorii de Imagini
							</Link>
							<Link
								to="/fotografie-la-cerere"
								className="item-link">
								Fotografie la Cerere
							</Link>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Cronos<span>.</span>
						</h3>
						<div className="column-items">
							<Link to="/despre-noi" className="item-link">
								Despre Noi
							</Link>
							<Link to="/preturi" className="item-link">
								Lucrează cu noi
							</Link>
							<Link to="/preturi" className="item-link">
								Blog
							</Link>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Contact<span>.</span>
						</h3>
						<div className="column-items">
							<Link to="/preturi" className="item-link">
								Clienți
							</Link>
							<Link to="/preturi" className="item-link">
								Fotografi
							</Link>
							<Link to="/preturi" className="item-link">
								Întrebări Frecvente
							</Link>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Legal<span>.</span>
						</h3>
						<div className="column-items">
							<Link
								to="/termeni-si-conditii"
								className="item-link">
								Termeni și Condiții
							</Link>
							<Link
								to="/conditii-de-licentiere"
								className="item-link">
								Condiții de Licențiere
							</Link>
							<Link to="/despre-cookies" className="item-link">
								Despre Cookies
							</Link>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Social<span>.</span>
						</h3>
						<div className="column-items">
							<Link to="/preturi" className="item-link">
								Instagram
							</Link>
							<Link to="/preturi" className="item-link">
								Facebook
							</Link>
							<Link to="/preturi" className="item-link">
								Twitter
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="small-footer-wrapper">
				<div className="small-footer-copyright-info">
					<p className="copyright-text">
						<a
							href="https://cronosmedia.ro"
							className="copyright-link">
							CRONOS
						</a>{" "}
						&#169; 2022
					</p>
				</div>

				<div className="small-footer-copyright-info">
					<p className="copyright-text">
						Creat de{" "}
						<a
							href="https://netfan.ro/servicii-de-web-design"
							className="copyright-link">
							NetFan
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
