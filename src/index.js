import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
	AboutUs,
	Album,
	Assignmets,
	Cart,
	Categories,
	Creative,
	Editorial,
	FAQ,
	LicensingConditions,
	Prices,
	Register,
	Research,
	SignIn,
	Sport,
	Cookies,
	TermsAndConditions,
	WorkWithUs,
} from "./pages";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/despre-cookies" element={<Cookies />} />
			<Route
				path="/termeni-si-conditii"
				element={<TermsAndConditions />}
			/>
			<Route path="/despre-noi" element={<AboutUs />} />
			<Route path="/album" element={<Album />} />
			<Route path="/fotografie-la-cerere" element={<Assignmets />} />
			<Route path="/cos" element={<Cart />} />
			<Route path="/categorii" element={<Categories />} />
			<Route path="/creative" element={<Creative />} />
			<Route path="/editorial" element={<Editorial />} />
			<Route path="/faq" element={<FAQ />} />
			<Route path="/licentiere" element={<LicensingConditions />} />
			<Route path="/preturi" element={<Prices />} />
			<Route path="/inregistrare" element={<Register />} />
			<Route path="/autentificare" element={<SignIn />} />
			<Route path="/sport" element={<Sport />} />
			<Route path="/lucreaza-cu-noi" element={<WorkWithUs />} />
			<Route path="/cercetare" element={<Research />} />
		</Routes>
	</Router>,
	document.getElementById("root")
);
