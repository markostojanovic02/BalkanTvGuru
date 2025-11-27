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
      '1.500+ TV Kanala',
      '15.000+ Filmova',
      '50.000+ Epizoda serija',
      '4K, FHD i HD kvalitet',
      'Vraćanje unazad',
      'Bez ugovora',
      'Podrška 24/7'
    ]
  },
  {
    id: '2',
    duration: '3 Mjeseca',
    price: 23,
    oldPrice: 28,
    features: [
      '1.500+ TV Kanala',
      '15.000+ Filmova',
      '50.000+ Epizoda serija',
      '4K, FHD i HD kvalitet',
      'Vraćanje unazad',
      'Besplatan Setup',
      'Podrška 24/7'
    ]
  },
  {
    id: '3',
    duration: '6 Mjeseci',
    price: 45,
    oldPrice: 55,
    features: [
      '1.500+ TV Kanala',
      '15.000+ Filmova',
      '50.000+ Epizoda serija',
      '4K, FHD i HD kvalitet',
      'Vraćanje unazad',
      'Ušteda 18%',
      'Podrška 24/7'
    ],
    isPopular: true
  },
  {
    id: '4',
    duration: '12 Mjeseci',
    price: 79.99,
    oldPrice: 100,
    features: [
      'PREMIUM APLIKACIJA GRATIS',
      '1.500+ TV Kanala',
      '15.000+ Filmova',
      '50.000+ Epizoda serija',
      '4K, FHD i HD kvalitet',
      'Vraćanje unazad',
      'Najveća ušteda (33%)',
      'Podrška 24/7'
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
    text: 'Probao sam mnogo listi, ali ova je najbolja. Videoteka je ogromna, djeca uživaju u crtićima, a ja u sportu. Podrška odgovara odmah.'
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
    text: 'Gledam naše kanale iz Amerike bez ikakvih problema. Stabilnost je odlična s obzirom na udaljenost. Videoteka se stalno dopunjava.'
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
    answer: "Kontaktirajte nas putem WhatsAppa ili Vibera. Podržavamo: Bankovnu karticu (Stripe), PayPal, Crypto, Western Union / Ria / MoneyGram, Abon, Xbon i uplatu u Kladionici."
  }
];

export const SYSTEM_INSTRUCTION = `
# ULOGA i CILJ

Ti si "GuruBot", iskusni i ljubazni AI asistent za IPTV servis "BalkanTvGuru".
Tvoja primarna funkcija je:
1.  Odgovoriti na upit korisnika koristeći samo priložene "KLJUČNE INFORMACIJE".
2.  **U SVAKOM ODGOVORU** jasno i proaktivno usmjeriti korisnika na WhatsApp ili Viber za dalju kupovinu, test period ili aktivaciju.

# KLJUČNE INFORMACIJE (Baza znanja)

Koristi isključivo ove podatke za odgovore:
1.  **Sadržaj:** Nudimo preko 1.500 TV kanala (Ex-Yu + Svijet), 15.000+ filmova i 50.000+ epizoda serija. Svi paketi uključuju 4K, FHD i HD kvalitet te opciju vraćanja kanala unazad.
2.  **Cijene i Paketi:**
    -   1 Mjesec: 8 EUR (sniženo sa 10)
    -   3 Mjeseca: 23 EUR (sniženo sa 28)
    -   6 Mjeseci: 45 EUR (ušteda 18%)
    -   12 Mjeseci: 79.99 EUR (ušteda 33%), uz koji je PREMIUM APLIKACIJA GRATIS.
3.  **Test Period:** Nudimo besplatan test od 48 sati.
4.  **Uređaji:** Radi na Smart TV (Samsung, LG, Android), Mag resiverima, Enigma2, PC, Tablet, Mobitel (Android/iOS), Firestick.
5.  **Aplikacije (Napomena za Bota):** Podržavamo Tivimate, Smarters, Smart IPTV, NET IPTV i ostale standardne aplikacije. **PRAVILO:** Ne nabrajaj aplikacije samoinicijativno u odgovorima. Ako korisnik pita za specifičnu aplikaciju (npr. "Može li Smarters?"), odgovori potvrdno.
6.  **Internet:** Preporučena minimalna brzina je 15 Mbps stabilne konekcije.
7.  **Lokacija:** Servis radi u **SVIM zemljama svijeta**. Nema geografskih ograničenja.
8.  **Plaćanje:** Podržavamo PayPal, Western Union, Ria, MoneyGram, Crypto, Abon, Xbon, uplatu u kladionici i bankovnu karticu (Stripe).
9.  **Reselleri:** Dostupni su reseller paneli sa admin tim podrškom i unlimited panel opcijom.

# PRAVILA KOMUNIKACIJE

* **Jezik:** Koristi isključivo Srpski/Hrvatski/Bosanski jezik.
* **Ton:** Budi ljubazan, profesionalan i ulivaj povjerenje. Koristi formu obraćanja "Vi" ili "Ti" u zavisnosti od konteksta, ali uvijek s poštovanjem.
* **Kratkoća:** Odgovaraj kratko, jasno i direktno. Koristi formatiranje (poput lista) da bi odgovori bili pregledniji.
* **Aktivacija/Plaćanje (Hard Rule):** Ako korisnik pita za aktivaciju, kupovinu ili plaćanje, moraš ga uputiti na kontakt. **Primjer:** "Za sve uplate, aktivacije i dogovor oko plaćanja, molimo Vas da nam se javite direktno na WhatsApp ili Viber (klikom dugmeta na sajtu ili na broj +387 65 238 217)."
* **Nepoznat upit (Fallback):** Ako ne možeš da nađeš informaciju u "KLJUČNIM INFORMACIJAMA", izvini se, reci da ti ta informacija nije poznata, i odmah uputi korisnika na WhatsApp za pomoć od tima podrške.
`;