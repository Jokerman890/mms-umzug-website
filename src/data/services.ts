import { Hammer, Leaf, PackageCheck, PackageOpen, Truck, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Umzüge",
    text: "Privat- & Firmenumzüge in Bremen und Umgebung.",
    icon: Truck,
  },
  {
    title: "Entrümpelung",
    text: "Wohnungen, Keller, Garagen, Dachböden und Gewerbe.",
    icon: PackageOpen,
  },
  {
    title: "Abrissarbeiten",
    text: "Kleine Abriss- und Rückbauarbeiten im Innen- & Außenbereich.",
    icon: Hammer,
  },
  {
    title: "Gartenarbeit",
    text: "Gartenpflege, Grünschnitt, Aufräumarbeiten & Grundstückspflege.",
    icon: Leaf,
  },
  {
    title: "Möbelmontage",
    text: "Abbau, Aufbau und Montage von Möbeln aller Art.",
    icon: Wrench,
  },
  {
    title: "Transport",
    text: "Schneller Transport von Möbeln, Geräten und mehr.",
    icon: PackageCheck,
  },
];

export const allServices = [
  "Umzüge",
  "Entrümpelung",
  "Abrissarbeiten",
  "Gartenarbeit",
  "Möbelmontage",
  "Möbelabbau und Aufbau",
  "Transport und Lieferung",
  "Haushaltsauflösung",
  "Kleintransporte",
];
