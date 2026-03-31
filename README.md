# Café Aroma — site web static

*Proiect la disciplina Dezvoltare web — site static HTML, CSS și JavaScript.*

## 1. Titlul proiectului

**Café Aroma — site web static**

## 2. Descrierea temei site-ului

**Café Aroma** este un site de prezentare pentru o cafenea fictivă de specialitate. Conținutul promovează experiența de cafea (arabica, patiserie, spațiu de lucru), valorile brandului, serviciile și meniul cu prețuri, o secțiune dedicată francizei pentru potențiali antreprenori, respectiv o pagină **Contact** cu formular, date de localizare și zonă pentru hartă. Site-ul este destinat demonstrării competențelor de **HTML5**, **CSS** responsive și **JavaScript** fără framework-uri, în cadrul disciplinei **Dezvoltare web**.

Implementarea acoperă cerințele temei: site static fără framework-uri; cel puțin patru pagini cu layout distinct (proiectul include și **Despre noi**); pagină **Contact** cu formular și validare JS; design responsive; meniu sticky și mobil hamburger; două fonturi Google Fonts; hero pe pagina principală; structură HTML5 cu `<section>`; CSS separat în foldere.

## 3. Tehnologii utilizate

| Tehnologie | Rol |
|------------|-----|
| **HTML5** | Structură semantică: `nav`, `section`, `footer`, formulare, meta tag-uri |
| **CSS3** | Stiluri în fișiere separate: variabile, layout, componente, animații |
| **JavaScript (vanilla)** | Meniu mobil (hamburger), overlay, efecte la scroll, validare formular |
| **Google Fonts** | **Montserrat** (titluri) și **Open Sans** (text de corp) |

Nu sunt folosite framework-uri front-end (React, Angular, Vue etc.) și nici baze de date — site-ul este static.

## 4. Platforme și instrumente pentru prototip

Prototipul inițial a fost generat cu ajutorul unor platforme AI de dezvoltare web (ex.: **Bolt.new**, **Lovable.dev** sau similare), apoi materialul a fost adaptat și simplificat într-o versiune **HTML + CSS + JavaScript** care rulează local.

Pentru dezvoltare colaborativă au fost folosite:

- **GitHub** — versionare și colaborare
- **Visual Studio Code** — editor
- **Extensii AI** (ex.: GitHub Copilot sau altele) — suport la editare și optimizare

## 5. Surse de inspirație pentru design

- Estetica **cafenelelor de specialitate** și a brandurilor de retail cafea (palete calde: maro, crem, accente portocalii).
- Fotografii de tip **stock** (ex.: **Pexels**) pentru imagini de fundal și ilustrații de servicii.
- Modele de **landing page** cu hero mare, secțiuni pe grid și call-to-action clar.

## 6. Materiale bibliografice și documentație

- [MDN Web Docs](https://developer.mozilla.org/) — HTML, CSS, JavaScript, accesibilitate
- [Google Fonts](https://fonts.google.com/) — Montserrat, Open Sans
- [Specificații HTML5](https://html.spec.whatwg.org/) — elemente și structură semantică
- Documentație **CSS** (layout flex/grid, variabile CSS, media queries) — MDN / W3C
- Ghiduri **WCAG** pentru accesibilitate de bază (etichete formular, `aria-*` unde e cazul)

## 7. Structura proiectului

```
echipa-14-3ie26-tema1/
├── index.html          # Acasă — hero, poveste scurtă, recomandări, CTA
├── services.html       # Servicii — carduri servicii, prețuri
├── franciza.html       # Franciză — ofertă, pași, CTA
├── contact.html        # Contact — formular, date, hartă placeholder
├── about.html          # Despre noi — valori, „ce ne face speciali”
├── css/
│   ├── variables.css   # Variabile de design (culori, tipografie, spacing)
│   ├── main.css        # Stiluri principale
│   └── responsive.css  # Adaptare tabletă / mobil
├── js/
│   ├── main.js         # Meniu hamburger, scroll, animații fade-in
│   └── form-validation.js  # Validare formular contact
├── img/                # (folder pentru imagini locale, dacă se adaugă)
└── README.md
```

Imaginile din pagini pot fi încărcate de pe URL-uri externe (ex. Pexels); folderul `img/` este pregătit pentru asset-uri locale.

## 8. Modul de rulare local

### Varianta WAMP (recomandat pentru proiectul din `www`)

1. Asigură-te că **WAMP** rulează (iconița verde).
2. Copiază sau clonează proiectul în `wamp64/www/echipa-14-3ie26-tema1` (sau calea echivalentă).
3. În browser deschide:  
   `http://localhost/echipa-14-3ie26-tema1/`  
   sau direct `http://localhost/echipa-14-3ie26-tema1/index.html`

### Varianta XAMPP

1. Pornește **Apache** din panoul XAMPP.
2. Plasează folderul proiectului în `htdocs/`.
3. Accesează `http://localhost/echipa-14-3ie26-tema1/index.html`.

### Deschidere directă `index.html`

Poți deschide `index.html` din explorator de fișiere (dublu-click). Unele funcții pot se comporta diferit față de server local (ex. căi absolute); pentru evaluare unitară, **localhost** este preferat.

## 9. Membrii echipei și contribuția

**Grupa 3IE26 — Echipa 14** (4 studenți). *Actualizați tabelul de mai jos cu numele reale și repartizarea finală din echipă.*

