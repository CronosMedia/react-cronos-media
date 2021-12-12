import { useState } from "react";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./licensing-conditions.scss";

const LicensingConditions = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="section">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			Licentiere
		</div>
	);
};

export default LicensingConditions;
