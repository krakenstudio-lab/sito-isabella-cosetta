import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/CTASection";
import {
  Heart,
  Users,
  Award,
  CheckCircle2,
  Calendar,
  MapPin,
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const services = [
    {
      title: "Riabilitazione Pavimento Pelvico",
      description:
        "Trattamenti specializzati per incontinenza, prolassi, dolore pelvico e disfunzioni post-parto.",
      href: "/pavimento-pelvico",
      icon: Heart,
    },
    {
      title: "Riabilitazione Diastasi Addominale",
      description:
        "Programmi personalizzati per recuperare la funzionalità della parete addominale dopo la gravidanza.",
      href: "/diastasi-addominale",
      icon: Users,
    },
  ];

  const benefits = [
    "Approccio personalizzato e rispettoso",
    "Tecniche evidence-based",
    "Ambiente professionale e riservato",
    "Esperienza specifica in salute femminile",
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Isabella Cosetta - Fisioterapista Pavimento Pelvico e Diastasi Addominale | Ferrara</title>
        <meta name="description" content="Isabella Cosetta, fisioterapista specializzata in riabilitazione del pavimento pelvico e diastasi addominale a Ferrara. Trattamenti personalizzati per il benessere femminile e post-parto." />
        <meta property="og:title" content="Isabella Cosetta - Fisioterapista Pavimento Pelvico | Ferrara" />
        <meta property="og:description" content="Specialista in riabilitazione del pavimento pelvico e diastasi addominale a Ferrara. Prenota una consulenza." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://isabellacosetta.it",
            name: "Isabella Cosetta - Fisioterapista",
            description: "Fisioterapista specializzata in riabilitazione del pavimento pelvico e diastasi addominale a Ferrara",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ferrara",
              addressRegion: "Emilia-Romagna",
              addressCountry: "IT",
            },
            telephone: "+390123456789",
            email: "info@isabellacosetta.it",
            areaServed: {
              "@type": "City",
              name: "Ferrara",
            },
            medicalSpecialty: ["Physiotherapy", "Pelvic Floor Rehabilitation", "Women's Health"],
            priceRange: "€€",
          })}
        </script>
      </Helmet>
      <section className="relative h-[85vh] md:h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <MapPin className="h-4 w-4" />
                  Studio a Ferrara
                </span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight"
                data-testid="text-hero-title"
              >
                Benessere e Salute Femminile
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Fisioterapista specializzata in riabilitazione del pavimento pelvico
                e diastasi addominale. Un approccio professionale e personalizzato
                per il tuo benessere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  data-testid="button-hero-cta"
                  onClick={() =>
                    window.open("https://calendar.google.com", "_blank")
                  }
                  size="lg"
                  variant="default"
                  className="rounded-full px-8"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Prenota una Consulenza
                </Button>
                <Link href="/pavimento-pelvico">
                  <Button
                    data-testid="button-hero-services"
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 backdrop-blur-sm bg-background/80"
                  >
                    Scopri i Servizi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Chi Sono
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sono <span className="font-semibold text-foreground">Isabella Cosetta</span>, fisioterapista
                specializzata nella riabilitazione del pavimento pelvico e della
                diastasi addominale.
              </p>
              <p>
                La mia missione è accompagnare ogni donna nel suo percorso di
                recupero e benessere, con un approccio professionale, empatico e
                basato sulle più recenti evidenze scientifiche.
              </p>
              <p>
                Nel mio studio a <span className="font-semibold text-foreground">Ferrara</span>, offro un ambiente
                riservato e accogliente dove ogni paziente può sentirsi ascoltata
                e compresa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm font-medium text-foreground">{benefit}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Servizi Specialistici
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trattamenti personalizzati per la salute del pavimento pelvico e il
              recupero post-parto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover-elevate transition-all group"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link href={service.href}>
                    <Button
                      data-testid={`button-service-${index}`}
                      variant="outline"
                      className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    >
                      Scopri di Più
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Perché Scegliere il Mio Studio
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Esperienza Specializzata</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Formazione continua e specializzazione nelle problematiche del
                  pavimento pelvico femminile
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Approccio Empatico</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ascolto attento e comprensione delle esigenze individuali in un
                  ambiente riservato
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Studio a Ferrara</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Posizione comoda e accessibile nel cuore di Ferrara con parcheggio
                  nelle vicinanze
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
