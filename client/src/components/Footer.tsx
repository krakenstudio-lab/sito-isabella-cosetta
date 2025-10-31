import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-24">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4">
              Isabella Cosetta
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fisioterapista specializzata in riabilitazione del pavimento pelvico
              e diastasi addominale. Approccio personalizzato e professionale per
              il tuo benessere.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Pagine</h4>
            <nav className="space-y-3">
              <Link 
                href="/"
                data-testid="link-footer-home"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/pavimento-pelvico"
                data-testid="link-footer-pavimento"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Pavimento Pelvico
              </Link>
              <Link 
                href="/diastasi-addominale"
                data-testid="link-footer-diastasi"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Diastasi Addominale
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground" data-testid="text-address">
                    Studio Fisioterapico
                  </p>
                  <p className="text-sm text-muted-foreground">Ferrara, Italia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+390123456789"
                  data-testid="link-phone"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +39 012 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@isabellacosetta.it"
                  data-testid="link-email"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@isabellacosetta.it
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground" data-testid="text-hours">
                    Lun - Ven: 9:00 - 19:00
                  </p>
                  <p className="text-sm text-muted-foreground">Sab: Su appuntamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Isabella Cosetta. Tutti i diritti
              riservati.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                data-testid="link-privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                data-testid="link-terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Termini di Servizio
              </a>
            </div>
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Isabella Cosetta - Fisioterapista",
            description:
              "Fisioterapista specializzata in riabilitazione del pavimento pelvico e diastasi addominale a Ferrara",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ferrara",
              addressCountry: "IT",
            },
            telephone: "+390123456789",
            email: "info@isabellacosetta.it",
            areaServed: "Ferrara",
            medicalSpecialty: "Physiotherapy",
          }),
        }}
      />
    </footer>
  );
}
