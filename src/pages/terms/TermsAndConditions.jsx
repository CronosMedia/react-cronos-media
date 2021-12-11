import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./cookies.scss";

const TermsAndConditions = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="section">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="content-wrapper">
				<h1>Termene și condiții</h1>
				<h2>1. Acceptarea acestor termene</h2>
				<p>
					Accesul și utilizarea acestui website,
					www.dianaseceleanu.ro, se supun acestor „Termene și
					condiții”. Nu vei folosi acest website în scopuri ilegale
					sau interzise prin termenele și condițiile care urmează.
					Prin utilizarea website-ului acceptați acest lucru, în caz
					contrar fiind necesară întreruperea utilizării webiste-ului.
				</p>
				<h2>2. Recomandări</h2>
				<p>
					Conținutul acestui website nu poate fi considerat
					recomandare și nu ar trebui luat în considerare pentru
					luarea deciziilor.
				</p>
				<h2>3. Date cu caracter personal</h2>
				<p>
					Completarea datelor personale pe acest website reprezintă
					acordul ca acestea să intre în baza de date a
					dianaseceleanu.ro, precum și să fie prelucrate conform
					prevederilor Legii Nr. 677/2001 pentru protecția persoanelor
					cu privire la prelucrarea datelor cu caracter personal și
					libera circulație a acestor date. Menționăm că
					dianaseceleanu.ro va păstra confidențialitatea acestor
					informații, cu excepția eventualelor informații solicitate
					de autoritățile legale competente. Trimiterea unei
					solicitări pe website-ul dianaseceleanu.ro reprezintă
					acordul ca dianaseceleanu.ro să te contacteze, direct sau
					prin partenerii contractuali, utilizând datele personale în
					acest scop, pentru a comunica informațiile solicitate prin
					intermediul formularelor, dar și pentru a primi materiale de
					prezentare și pentru realizarea de campanii de vânzări și
					marketing, analize și alte activități similare.
				</p>
				<h2>
					4. Modificări ale webiste-ului, software-ului și ale
					serviciilor
				</h2>
				<p>
					Dianaseceleanu.ro își rezervă dreptul de a:{" "}
					<ul>
						<li>
							modifica sau șterge, temporar sau permanent,
							website-ul sau orice parte a acestuia, fără a anunța
							în prealabil și fără a putea fi considerată
							responsabilă pentru asemenea modificări sau
							ștergeri;
						</li>
						<li>
							modifica, șterge sau întrerupe orice software,
							serviciu sau promoție (inclusiv, dar fără a se
							limita la orice prevederi, părți, licențe, prețuri),
							așa cum sunt promovate pe acest website, în orice
							moment, fără a putea fi considerată responsabilă
							pentru asemenea modificări sau ștergeri;
						</li>
						<li>
							modifica sau întrerupe orice voucher promoțional de
							reducere sau cod de cupon de reducere, în orice
							moment, fără a putea fi considerată responsabilă
							pentru asemenea modificări sau întreruperi;
						</li>
						<li>
							modifica această înțelegere, în orice moment, iar
							continuarea utilizării website-ului, după aceste
							schimbări, se va supune acceptării acestor
							modificări;
						</li>
						<li>
							păstra informațiile personale pentru utilizarea
							către terți, dacă permiți folosirea sistemului de
							cookies, a cărui politică o poți parcurge aici.
						</li>
					</ul>
				</p>
				<h2>5. Link-uri către website-urile terților</h2>
				<p>
					Website-ul poate include link-uri către website-urile
					terților, care sunt controlate și conduse de alții. Orice
					link spre un alt website nu este o recomandare a acestui
					website, așadar dianaseceleanu.ro nu își asumă
					responsabilitatea pentru conținutul și disponibilitatea
					acestor website-uri.
				</p>
				<h2>6. Copyright</h2>
				<p>
					Drepturile asupra Proprietății Intelectuale din acest
					website și materialele din acesta sau accesibile prin acesta
					aparțin dianaseceleanu.ro sau licențelor sale.{" "}
				</p>
				<p>
					Website-ul, materialele de pe website sau cele accesibile
					prin acesta și Drepturile asupra Proprietății Intelectuale
					inerente nu pot fi copiate, distribuite, publicate,
					licențiate, folosite sau reproduse în nici un fel, în afară
					de măsura strict necesară pentru și cu scopul legat de
					accesarea și utilizarea acestui website. Dianaseceleanu.ro
					și logo-ul dianaseceleanu.ro nu pot fi utilizate, copiate
					sau reproduse în nici un fel, fără acordul scris al
					dianaseceleanu.ro.
				</p>
				<p>
					Pentru aceste scopuri, „Drepturile asupra Proprietății
					Intelectuale” includ următoarele (oriunde și oricând apar,
					pentru întregul termen al acestora): orice drept, marcă
					înregistrată, nume de serviciu, design, drept asupra
					design-ului, copyright, drept asupra bazelor de date,
					drepturi morale, know how, secrete de muncă și alte
					informații confidențiale, drepturi de natura oricăror dintre
					aceste elemente în orice țară, drepturi de natura
					competiției neloiale și drepturi de a da în judecată pentru
					transmitere sau alte drepturi similare intelectuale și
					comerciale (caz în care sunt sau nu înregistrate sau
					înregistrabile) și înregistrările și aplicațiile de
					înregistrare pentru oricare dintre ele.
				</p>
				<h2>7. Limita răspunderii</h2>
				<p>
					Website-ul este distribuit pe baza „așa cum este” și
					„disponibil” fără nicio prezentare sau promovare făcută și
					fără garanție de nici un fel, expresă sau implicită,
					incluzând, dar fără a se limita, garanțiile de calitate
					satisfăcătoare, neîncălcare, compatibilitate, securitate și
					acuratețe.
				</p>
				<p>
					În limita legii, dianaseceleanu.ro nu va fi trasă la
					răspundere pentru pierderi indirecte, de orice fel sau
					rezultate, incluzând, dar nelimitându-se la pierderi de
					afaceri, oportunități, de date, de profituri ce rezultă din
					sau în legătură cu utilizarea website-ului.
				</p>
				<p>
					Dianaseceleanu.ro nu oferă nicio garanție că funcționarea
					website-ului va fi fără întrerupere sau fără erori, că
					defectele vor fi corectate sau că website-ul și serverul
					care îl fac disponibil sunt lipsite de viruși sau orice
					altceva ce poate fi dăunător sau distructiv.
				</p>
				<h2>8. Despăgubiri</h2>
				<p>
					Ești de acord să despăgubești și să absolvi
					dianaseceleanu.ro de toate răspunderile, taxele legale,
					stricăciunile, pierderile, costurile și toate celelalte
					cheltuieli în relație cu revendicările sau acțiunile aduse
					împotriva dianaseceleanu.ro, apărute din orice încălcare a
					acestor „Termene și condiții” de către tin sau alte
					responsabilități născute din utilizarea acestui website.
				</p>
				<h2>9. Anulare</h2>
				<p>
					În cazul în care oricare dintre prevederile acestei
					înțelegeri sunt declarate, de către orice autoritate
					juridică sau de o altă competență, nule, anulabile, ilegale
					sau nonexecutabile în vreun fel sau indicative de orice alt
					fel, ce sunt primite de tine sau de dianaseceleanu.ro din
					partea unei autorități competente, vom modifica acea
					prevedere într-o manieră rezonabilă, astfel încât să se
					conformeze intențiilor părților, fără a intra în ilegalitate
					sau, la discreția noastră, prevederile în cauză pot fi
					scoase din această înțelegere, iar restul prevederilor
					rămânând în vigoare.
				</p>
				<h2>10. Legi aplicabile și dispute</h2>
				<p>
					Această înțelegere și toate cele ce rezultă din ea sunt
					guvernate de și formulate în acord cu legea din România, ale
					cărei curți au jurisdicție exclusivă asupra tuturor
					disputelor ce rezultă din această înțelegere, iar tu ești de
					acord ca locul de punere în practică a acestei înțelegeri
					este România.
				</p>
				<h2>11. Titluri</h2>
				<p>
					Titlurile sunt incluse în această înțelegere pentru
					conveniență și nu vor afecta înțelegerea acesteia.
				</p>
				<h2>12. Înțelegerea completă</h2>
				<p>
					Termenele și condițiile, precum și alte documente la care se
					face referință expres în înțelegere, includ întreaga
					înțelegere dintre noi în legătură cu subictul exprimat și
					înlocuiesc orice înțelegeri, aranjamente, angajamente sau
					propuneri anterioare, scrise sau orale, între noi și acele
					aspecte. Orice explicație sau informare orală dată de vreuna
					dintre cele două părți nu poate altera interpretarea
					termenelor și condițiilor. Prin acceptarea termenelor și
					condițiilor, nu te-ai bazat pe o altă reprezentare, decât
					cea stipulată în această înțelegere și ești de acord că nu
					vei avea nicio cale de atac, cu privire la orice falsă
					reprezentare ce nu a fost exprimată expres în această
					înțelegere.
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default TermsAndConditions;
