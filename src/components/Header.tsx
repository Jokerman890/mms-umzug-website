import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { assetPaths, company, navItems } from "../data/company";
import { AssetImage } from "./AssetImage";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Hauptnavigation">
        <a className="brand" href="#start" aria-label="MMS Umzug Startseite">
          <AssetImage src={assetPaths.logo} alt="MMS Umzug Logo" fallbackLabel="MMS Umzug" className="brand-logo" />
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <a className="call-button" href={company.phoneHref} aria-label="MMS Umzug jetzt anrufen">
          <Phone size={19} aria-hidden="true" />
          <span>{company.phone}</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="mobile-menu container">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
