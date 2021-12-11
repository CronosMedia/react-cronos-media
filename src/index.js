import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "./pages/terms/Cookies";
import TermsAndConditions from "./pages/terms/TermsAndConditions";

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/despre-cookies" element={<Cookies />} />
			<Route
				path="/termeni-si-conditii"
				element={<TermsAndConditions />}
			/>
		</Routes>
	</Router>,
	document.getElementById("root")
);
