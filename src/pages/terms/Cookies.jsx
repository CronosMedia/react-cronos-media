import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";
import "./cookies.scss";

const Cookies = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="section">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="content-wrapper">
				<h1>Despre cookies</h1>
				<h2>1. Politica de utilizare a cookies</h2>
				<p>
					Acestea se referă la cookies din webiste-ul cronosmedia.ro
				</p>
				<h2>2. Ce sunt cookies?</h2>
				<p>
					Cookies sunt fișiere text de mici dimensiuni, stocate pe
					echipamente terminale ale unui utilizator de Internet.
					Cookie-ul este insalat prin solicitarea emisă printr-un
					webserver către un browser și nu conține programe software,
					viruși sau spyware, neavând acces la informațiile de pe hard
					drive-ul utilizatorului. Aceste fișiere permit recunoașterea
					echipamentului utilizatorului și afișarea în mod
					corespunzător a paginii de Internet, adaptată preferințelor
					individuale ale utilizatorului.
				</p>
				<h2>3. Rolul fișierelor de tip Cookie</h2>
				<p>
					Fișierele de tip cookies permit recunoaşterea echipamentului
					utilizatorului şi afişarea în mod corespunzător a paginii de
					Internet, adaptată în funcție de preferinţele
					utilizatorului. Cookies au rolul de a-ți asigura o
					experiență de navigare web plăcută și sigură și de a îți
					oferi servicii complete, în funcție de comportamentul online
					manifestat pe websiteul cronosmedia.ro.
				</p>
				<p>
					Concret, pe baza cookies, cronosmedia.ro are posibilitatea
					de a:
					<ul>
						<li>
							adapta prezentarea și afișarea site-ului, în funcție
							de preferințele tale, precum limbă, rezoluție și așa
							mai departe;
						</li>
						<li>
							crea statistici anonime, care nu presupun
							identificarea personală, bazate pe comportamentul
							tău pe site și de interesul manifestat pentru
							produsele prezentate. Aceste statistici permit să
							îmbunătățim structura și conținutul site-ului,
							astfel încât să îți oferim informațiile de care ai
							nevoie;
						</li>
						<li>asigura măsuri de securitate web.</li>
					</ul>
				</p>
				<h2>4. Tipuri de cookies folosite pe siteul cronosmedia.ro</h2>
				<p>
					Site-ul cronosmedia.ro folosește două tipuri de fișiere
					cookies: per sesiune și fixe. Cookies per sesiune sunt
					fișiere temporare, care se instalează în terminalul tău, în
					timpul vizitei pe website-ul menționat, până la închiderea
					sesiunii sau a browser-ului folosit. Cookies fixe rămân în
					terminalul utilizat de tine pentru o perioadă de timp mai
					mare, în funcție de parametrii lor sau până când sunt șterse
					manual de către tine.
				</p>
				<h2>5. Cum sunt folosite cookiespe site-ul cronosmedia.ro</h2>
				<p>
					Vizita ta pe cronosmedia.ro poate instala fișiere de tip
					cookie, pentru a putea analiza:
					<ul>
						<li>Performanța site-ului;</li>
						<li>Înregistrarea ta (log in, newsletter etc.);</li>
						<li>Profilul tău de utilizator;</li>
						<li>Locația ta, în scop de targetare geografică;</li>
						<li>
							Pentru a-ți putea livra conținut publicitar
							personalizat.
						</li>
					</ul>
				</p>
				<h2>6. Cookies înregistrează sau conțin date personale?</h2>
				<p>
					Cookies nu solicită informații cu caracter personal și nu
					identifică personal utilizatorii de Internet. Datele
					personale colectate prin utilizarea cookies pot fi folosite
					doar pentru facilitarea anumitor funcționalități pentru
					tine. Aceste date sunt criptate, astfel încât persoanele
					neautorizate să nu aibă acces la ele.
				</p>
				<h2>7. Ștergerea cookies</h2>
				<p>
					Aplicațiile folosite pentru accesarea paginilor web salvează
					cookies pe terminalul utilizatorului de Internet în mod
					implicit. Totuși, setările pot fi schimbate de către tine,
					astfel încât instalarea automată a cookies să fie blocată de
					browser-ul pe care îl folosești. Informații detaliate despre
					modurile de administrare a cookies sunt disponibile în
					câmpul de setări al browser-ului web. Trebuie să știi, însă,
					că limitarea folosirii cookies poate afecta anumite
					funcționalități ale modului în care sunt afișate paginile
					website-ului cronosmedia.ro.
				</p>
				<h2>8. De ce sunt cookies importante pentru Internet?</h2>
				<p>
					Cookies sunt importante pentru funcționarea eficientă a
					Internetului, în interesul utilizatorului, deoarece
					contribuie la crearea unei experiențe de navigare web simple
					și personalizate, în funcție de interesele, preferințele și
					comportamentul fiecărui utilizator.
				</p>
				<p>
					Blocarea sau dezactivarea cookies poate face unele site-uri
					imposibil de folosit sau pot limita semnificativ experiența
					ta pe web. Blocarea sau dezactivarea fișierelor cookie nu î
					nseamnă că nu vă vor mai fi livrate mesaje publicitare, ci
					că paginile web pe care te afli nu îți vor mai oferi o
					experiență adaptată tipului tău de comportament și
					preferințelor exprimate.
				</p>
				<p>
					Fișierele de tip cookie sunt importante pentru:
					<ul>
						<li>
							Conținut și servicii adaptate preferințelor tale –
							categorii de produse și servicii;
						</li>
						<li>
							Oferte adaptate intereselor tale -reținerea
							parolelor-, în cazul în care optezi pentru această
							funcționalitate;
						</li>
						<li>
							Reținerea filtrelor de protecție a copiilor privind
							conținutul web (opțiuni family mode, funcții de safe
							search etc.);
						</li>
						<li>
							Limitarea frecvenței de livrare a mesajelor
							publicitare – limitarea numărului de afișări a unei
							reclame pentru un anumit utilizator pe un site;
						</li>
						<li>
							Furnizarea de publicitate relevantă în funcție de
							utilizator;
						</li>
						<li>
							Măsurarea, optimizarea și înregistrarea de date
							legate de performanța a site-ului – statistici
							legate de trafic și conținut vizualizat. Aceste
							informații sunt importante pentru îmbunătățirea
							experienței web a utilizatorului.
						</li>
					</ul>
				</p>
				<h2>
					9. Securitate web și aspect legate de confidențialitatea
					utilizatorului
				</h2>
				<p>
					Cookies nu sunt viruși și nu colectează date cu caracter
					personal.
				</p>
				<p>
					Totuși, cookies pot fi utilizate în detrimentul
					utilizatorului, de către programele tip Spyware. Deoarece
					stochează informații despre preferințele și istoricul de
					navigare al utilizatorului, cookies pot fi folosite ca o
					formă de Spyware. Aplicațiile anti-spyware au rolul de a
					marca cookies pentru a fi șterse în cadrul procedurilor de
					scanare anti-virus/anti-spyware.
				</p>
				<p>
					Browserele au integrate setări de confidențialitate care
					oferă diferite nivele de acceptare a cookies, precum
					perioada de valabilitate și stergere automată la încheierea
					unei sesiuni web.
				</p>
				<h2>10. Alte aspecte de securitate legate de cookies</h2>
				<p>
					Deoarece toți utilizatorii de Internet au dreptul la
					protecția identității online, este indicat să fii informat
					în legătură cu posibilele riscuri de securitate . Având în
					vedere că prin intermediul acestor fișiere se face schimb de
					informații constant între browser și site-ul pe care îl
					vizitezi, informațiile transmise prin cookies pot fi
					interceptate de persoane sau programe neautorizate. De
					exemplu, acest lucru este posibil în situația în care
					browser-ul se conectează la server folosind o rețea
					necriptată/nesecurizată, cum e cazul anumitor rețele Wi-Fi.
				</p>
				<p>
					Alte atacuri bazate pe cookies pot fi posibile din cauza
					unor setări greșite ale acestor fișiere pe servere. Daca un
					website nu solicită browser-ului să folosească doar canale
					criptate, atacatorii pot folosi această vulnerabilitate
					pentru a primi acces la informațiile transmise prin cookies.
					Din aceste motive, este esențial să acorzi o atenție sporită
					setărilor prin care îți protejați informațiile personale
					disponibile online.
				</p>
				<h2>
					11. Sfaturi pentru o navigare web sigură, bazată pe cookies
				</h2>
				<p>
					Datorită flexibilității lor și faptului că majoritatea
					dintre cele mai vizitate site-uri folosesc cookies, acestea
					sunt aproape inevitabile. Spre exemplu, dezactivarea cookies
					nu îți va permite accesul pe site-uri precum Youtube, Gmail,
					Yahoo și altele.
				</p>
				<p>
					De aceea, îți oferim câteva sfaturi, care să îți asigure o
					navigare web sigură, prin intermediul cookies:
					<ul>
						<li>
							Personalizează setările browser-ului în ceea ce
							privește cookies;
						</li>
						<li>
							Daca ești unicul utilizator al terminalului, poți
							seta termene de expirare a cookies prelungite;
						</li>
						<li>
							În cazul în care nu ești unicul utilizator al
							terminalului, ia în considerare ștergerea datelor
							individuale de navigare, de fiecare dată când
							închizi browser-ul;
						</li>
						<li>
							Instalează aplicații antispyware și fă-le, constant,
							update;
						</li>
						<li>
							Asigură-te că browser-ul folosit este mereu updatat,
							deoarece multe dintre atacurile bazate pe cookies
							sunt posibile din cauza punctelor slabe ale
							versiunilor vechi ale browser-elor.
						</li>
					</ul>
				</p>
				<p>
					Toate browser-ele îți oferă posibilitatea de a îți seta
					personalizat modul de acțiune a cookies. Pentru a ințelege
					aceste setări, accesează unul din linkurile de mai jos, în
					funcție de browser-ul folosit:
					<ul>
						<li>
							<a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-11">
								Setări cookies în Internet Explorer;
							</a>
						</li>
						<li>
							<a href="https://support.mozilla.org/ro/kb/activarea-si-dezactivarea-cookie-urilor">
								Setări cookies în Firefox;
							</a>
						</li>
						<li>
							<a href="https://support.google.com/accounts/answer/61416?hl=ro">
								Setări cookies în Google Chrome;
							</a>
						</li>
						<li>
							<a href="https://support.apple.com/kb/PH17191?viewlocale=ro_RO&locale=en_US">
								Setări cookies în Safari.
							</a>
						</li>
					</ul>
				</p>
				<p>
					Pentru setările cookies generate de terți poți consulta și
					site-ul:{" "}
					<a href="http://www.youronlinechoices.com/ro">
						http://www.youronlinechoices.com/ro.
					</a>
				</p>
				<h2>12. Link-uri utile</h2>
				<p>
					Pentru a afla mai multe informații despre cookiesși cum
					funcționează acestea, poți accesa informațiile de pe{" "}
					<a href="http://www.youronlinechoices.com/ro">
						http://www.youronlinechoices.com/ro
					</a>{" "}
					și{" "}
					<a href="https://www.cookiechoices.org">
						https://www.cookiechoices.org
					</a>
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default Cookies;
