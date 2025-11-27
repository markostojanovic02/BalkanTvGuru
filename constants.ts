import { PricingPlan, Testimonial, FaqItem } from './types';

export const CONTACT_PHONE = "38765238217";
export const CONTACT_WHATSAPP_LINK = `https://wa.me/${CONTACT_PHONE}`;
// Viber Business Channel Link
export const CONTACT_VIBER_LINK = `https://connect.viber.com/en/business/441c3c6e-094f-11f0-9ffd-c655692b991d`;
export const CONTACT_TELEGRAM_LINK = `https://t.me/BalkanTvGuru`;

export const NAV_LINKS = [
  { name: 'Početna', href: '#home' },
  { name: 'Kako radi', href: '#process' },
  { name: 'Cjenovnik', href: '#pricing' },
  { name: 'Recenzije', href: '#testimonials' },
  { name: 'Reselleri', href: '#resellers' },
  { name: 'FAQ', href: '#faq' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    duration: '1 Mjesec',
    price: 8,
    oldPrice: 10,
    features: [
      '1500+ TV Kanala',
      '15000+ Filmova',
      '50000+ Epizoda serija',
      '48h Test period',
      'Podrška 24/7'
    ]
  },
  {
    id: '2',
    duration: '6 Mjeseci',
    price: 45,
    oldPrice: 55,
    features: [
      'Sve iz mjesečnog paketa',
      'Stabilna konekcija',
      'Besplatna podešavanja',
      'Ušteda 18%',
      'Prioritetna podrška'
    ],
    isPopular: true
  },
  {
    id: '3',
    duration: '12 Mjeseci',
    price: 79.99,
    oldPrice: 100,
    features: [
      'PREMIUM APLIKACIJA GRATIS',
      'Sve iz paketa',
      'Najveća ušteda (33%)',
      'Garantovana cijena',
      'Mogućnost produženja',
      'VIP Status'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marko',
    initial: 'M',
    location: 'Njemačka',
    date: '12. Mart 2024.',
    text: 'Koristim BalkanTvGuru već 6 mjeseci. Slika je kristalno jasna, nema sjeckanja čak ni kad su utakmice Lige Šampiona. Svaka preporuka!'
  },
  {
    id: '2',
    name: 'Ivan',
    initial: 'I',
    location: 'Austrija',
    date: '05. April 2024.',
    text: 'Probao sam mnogo listi, ali ova je najbolja. Vidioteka je ogromna, djeca uživaju u crtićima, a ja u sportu. Podrška odgovara odmah.'
  },
  {
    id: '3',
    name: 'Adnan',
    initial: 'A',
    location: 'Švedska',
    date: '28. April 2024.',
    text: 'Prezadovoljan sam uslugom. Setup je bio gotov za 10 minuta uz pomoć podrške na WhatsAppu. Cijena za godinu dana je smiješna za ovaj kvalitet.'
  },
  {
    id: '4',
    name: 'Haris',
    initial: 'H',
    location: 'SAD',
    date: '10. Maj 2024.',
    text: 'Gledam naše kanale iz Amerike bez ikakvih problema. Stabilnost je odlična s obzirom na udaljenost. Vidioteka se stalno dopunjava.'
  },
  {
    id: '5',
    name: 'Damir',
    initial: 'D',
    location: 'Švicarska',
    date: '15. Maj 2024.',
    text: 'Sve radi top. Imao sam problema sa postavljanjem na Smart TV-u, ali mi je Guru tim pomogao korak po korak. Hvala vam!'
  },
  {
    id: '6',
    name: 'Goran',
    initial: 'G',
    location: 'Hrvatska',
    date: '02. Jun 2024.',
    text: 'Kvalitet slike na sportskim kanalima je pravi HD. Nema onog dosadnog bufferovanja u toku utakmice. Produžio sam pretplatu na godinu dana.'
  },
  {
    id: '7',
    name: 'Elena',
    initial: 'E',
    location: 'Slovenija',
    date: '20. Jun 2024.',
    text: 'Odlična usluga i ljubazna podrška. Najviše mi se sviđa opcija vraćanja unazad jer često propustim omiljene serije zbog posla.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Da li mogu dobiti test prije kupovine?",
    answer: "Naravno! Nudimo besplatan test period od 48 sati kako biste se uvjerili u kvalitet naše usluge prije nego što platite."
  },
  {
    question: "Na kojim uređajima radi usluga?",
    answer: "BalkanTvGuru radi na svim pametnim uređajima: Smart TV (Samsung, LG, Android), Mag resiveri, Enigma2, PC, Tablet, Mobitel (Android i iOS), Firestick."
  },
  {
    question: "Koja je minimalna brzina interneta potrebna?",
    answer: "Za stabilan rad servisa bez prekida preporučujemo minimalno 15 Mbps stabilne internet konekcije."
  },
  {
    question: "Da li se lista koči ili zamrzava?",
    answer: "Koristimo premium servere sa anti-freeze tehnologijom. Stabilnost je naš prioritet i garantujemo 99.9% uptime."
  },
  {
    question: "Kako se vrši plaćanje?",
    answer: "Kontaktirajte nas putem WhatsAppa ili Vibera. Podržavamo: Bankovnu karticu, PayPal, Crypto, Western Union / Ria / MoneyGram, Abon, Xbon i uplatu u Kladionici."
  }
];

export const SYSTEM_INSTRUCTION = `
Ti si "GuruBot", AI asistent za IPTV servis "BalkanTvGuru". Tvoj cilj je da ljubazno odgovaraš na pitanja potencijalnih korisnika i usmjeravaš ih na WhatsApp za kupovinu.

Ključne informacije o servisu koje moraš znati:
1. **Sadržaj:** Nudimo preko 1500 TV kanala (Ex-Yu + Svijet), 15000+ filmova i 1000+ serija sa preko 50000+ epizoda.
2. **Cijene:**
   - 1 Mjesec: 8 EUR (sniženo sa 10)
   - 6 Mjeseci: 45 EUR (sniženo sa 55)
   - 12 Mjeseci: 79.99 EUR (sniženo sa 100). Uz ovaj paket PREMIUM APLIKACIJA je GRATIS.
3. **Test:** Nudimo besplatan test od 48 sati.
4. **Uređaji:** Radimo na Smart TV, Android Box, Mag, PC, Mobitel, Tablet, Firestick. Podržavamo aplikacije kao što su Tivimate, IPTV Smarters, Smart IPTV, NET IPTV.
5. **Internet:** Preporučujemo brzinu od minimalno 15 Mbps stabilne konekcije za stabilan rad.
6. **Reselleri:** Nudimo reseller panele. Imamo admin tim podršku i unlimited panel opciju za iskusne prodavce.
7. **Plaćanje:** Bankovna kartica, PayPal, Crypto, Western Union, Ria, MoneyGram, Abon, Xbon i Kladionica.
8. **Kontakt:** Za sve uplate i aktivacije korisnik se mora javiti na WhatsApp ili Viber (Broj: +387 65 238 217) ili Telegram @BalkanTvGuru.

Ton komunikacije:
- Budi ljubazan, profesionalan i ulivaj povjerenje.
- Koristi "ti" ili "vi" u zavisnosti od konteksta, ali budi pristojan.
- Govori na našim jezicima (Srpski/Hrvatski/Bosanski).
- Ako te pitaju kako da plate, reci im da se jave na WhatsApp dugme na sajtu.
- Ime chata je "Pitaj Gurua".

Odgovaraj kratko i jasno.
`;