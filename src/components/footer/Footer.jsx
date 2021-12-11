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
							<a href="/preturi" className="item-link">
								Prețuri și Licențe
							</a>
							<a href="/preturi" className="item-link">
								Categorii de Imagini
							</a>
							<a href="/preturi" className="item-link">
								Fotografie la Cerere
							</a>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Cronos<span>.</span>
						</h3>
						<div className="column-items">
							<a href="/preturi" className="item-link">
								Despre Noi
							</a>
							<a href="/preturi" className="item-link">
								Lucrează cu noi
							</a>
							<a href="/preturi" className="item-link">
								Blog
							</a>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Contact<span>.</span>
						</h3>
						<div className="column-items">
							<a href="/preturi" className="item-link">
								Clienți
							</a>
							<a href="/preturi" className="item-link">
								Fotografi
							</a>
							<a href="/preturi" className="item-link">
								Întrebări Frecvente
							</a>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Legal<span>.</span>
						</h3>
						<div className="column-items">
							<a href="/preturi" className="item-link">
								Termeni și Condiții
							</a>
							<a href="/preturi" className="item-link">
								Condiții de Licențiere
							</a>
							<a href="/preturi" className="item-link">
								Despre Cookies
							</a>
						</div>
					</div>
				</div>

				<div className="footer-offers">
					<div className="footer-column">
						<h3 className="column-title">
							Social<span>.</span>
						</h3>
						<div className="column-items">
							<a href="/preturi" className="item-link">
								Instagram
							</a>
							<a href="/preturi" className="item-link">
								Facebook
							</a>
							<a href="/preturi" className="item-link">
								Twitter
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="small-footer-wrapper">
				<div className="small-footer-copyright-info">
					<p className="copyright-text">
						copyright &#169; 2022{" "}
						<a
							href="https://cronosmedia.ro"
							className="copyright-link">
							Cronos Media
						</a>
					</p>
				</div>

				<div className="small-footer-copyright-info">
					<p className="copyright-text">
						Creat de{" "}
						<a
							href="https://netfan.ro/servicii-de-web-design"
							className="copyright-link">
							NetFan Web Design
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
