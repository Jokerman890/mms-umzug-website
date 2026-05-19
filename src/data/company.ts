import { publicAsset } from "./assets";

export const company = {
  name: "MMS Umzug",
  legalName: "MMS Umzug / MMS-Dienstleistung",
  phone: "0176 405 510 85",
  phoneHref: "tel:+4917640551085",
  email: "mms.umzug@web.de",
  emailHref: "mailto:mms.umzug@web.de",
  domain: "www.mms-umzug.de",
  url: "https://www.mms-umzug.de",
  address: "Burger Heerstr. 32, 28719 Bremen",
  area: "Bremen und Umgebung",
  whatsappHref:
    "https://wa.me/4917640551085?text=Hallo%20MMS%20Umzug%2C%20ich%20m%C3%B6chte%20ein%20unverbindliches%20Angebot%20anfragen.",
};

export const navItems = [
  { label: "Startseite", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#warum" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Galerie", href: "#galerie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export const assetPaths = {
  logo: publicAsset("images/mms/mms-logo.svg"),
  logoWordmark: publicAsset("images/mms/mms-logo-wordmark.svg"),
  bremen: publicAsset("images/mms/bremen-background.jpg"),
  heroVehicle: publicAsset("images/mms/mms-fahrzeug-hero.jpg"),
};
