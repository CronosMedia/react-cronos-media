import { useState } from "react";
import AssignmentsGallery from "../../components/assignmentsgallery/AssignmentsGallery";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import { imgAssignments } from "../../data";
import "../../global.scss";
import "./assignments.scss";

const Assignments = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const imgAssignmentsGallery = imgAssignments.map((item) => {
		return <AssignmentsGallery key={item.id} {...item} />;
	});
	return (
		<div className="assignments">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="heading-wrapper">
				<h1>Cronos - Fotografie la cerere</h1>
				<p>
					În cazul în care aveți nevoie de noi pentru acoperirea unui
					eveniment în curs de desfășurare un eveniment viitor sau
					poate niște imagini despre un anumit subiect, te putem ajuta
					în orice moment.
				</p>
				<p>
					Delegând această responsabilitate în sarcina noastră, vă
					veți putea folosi resursele umane și logistice mult mai
					eficient și nu în ultimul rând lucrând cu noi totul va fi
					mai ieftin decât v-ați aștepta.
				</p>

				<p>
					Pentru mai multe detalii, ne puteți contacta pe adresa
					noastră de email clients@cronosmedia.ro sau folosind
					formularul de contact.
				</p>
			</div>
			<div className="case-study">
				<h2>Studiu de caz</h2>
				<p>
					Client: <span>Belga Images</span>
				</p>
				<p>
					Locația:{" "}
					<span>
						Municipiul Alba Iulia și Comuna Cricău, județul Alba
					</span>
				</p>
				<p>
					Fotograf: <span>Cătălin Soare</span>
				</p>
				<p>
					Nicușor Stanciu a fost unul dintre cele mai scumpe
					transferuri din campionatul belgian e fotbal în anul 2017,
					fotbalistul român fiind tranzacționat pentru suma record, la
					acea vreme, de 7 milioane Euro.
				</p>
				<p>
					Agenția de presă Belga Images a solicitat imagini cu
					locurile unde Nicușor Stanciu a copilarit (casa părintească
					și școala generală din comuna Cricău, județul Alba).
				</p>
				<p>
					De asemenea s-au solicitat imagini și cu stadionul unde
					sportivul a debutat în Liga Națională (stadionul „Unirea”
					din Alba Iulia) cât și cu Liceul cu Program Sportiv din Alba
					Iulia.
				</p>
				<p>
					Printr-o simplă delegare a acestor activități către Cronos,
					clientul a reușit să publice un reportaj dintr-o locație nu
					tocmai la îndemână cu un minim de efort și costuri
					incredibil de mici.
				</p>
			</div>
			<div className="img-grid">{imgAssignmentsGallery}</div>
		</div>
	);
};

export default Assignments;
