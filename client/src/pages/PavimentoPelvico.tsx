import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/CTASection";
import {
  CheckCircle2,
  AlertCircle,
  Heart,
  Shield,
  Activity,
  Calendar,
} from "lucide-react";

export default function PavimentoPelvico() {
  const conditions = [
    "Incontinenza urinaria da sforzo o da urgenza",
    "Prolasso degli organi pelvici",
    "Dolore pelvico cronico",
    "Disfunzioni sessuali",
    "Problematiche post-parto",
    "Preparazione al parto",
  ];

  const treatmentApproach = [
    {
      icon: Heart,
      title: "Valutazione Personalizzata",
      description:
        "Ogni percorso inizia con una valutazione approfondita per comprendere le tue esigenze specifiche.",
    },
    {
      icon: Activity,
      title: "Tecniche Manuali",
      description:
        "Utilizzo di tecniche di terapia manuale e rieducazione propriocettiva del pavimento pelvico.",
    },
    {
      icon: Shield,
      title: "Biofeedback e Elettrostimolazione",
      description:
        "Strumenti avanzati per il rinforzo e il recupero della funzionalità muscolare.",
    },
  ];

  const benefits = [
    "Miglioramento della qualità di vita",
    "Riduzione o eliminazione dell'incontinenza",
    "Recupero della funzionalità muscolare",
    "Prevenzione dei prolassi",
    "Miglioramento della vita sessuale",
    "Supporto pre e post-parto",
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Riabilitazione Pavimento Pelvico Ferrara | Isabella Cosetta Fisioterapista</title>
        <meta name="description" content="Trattamenti specializzati per incontinenza, prolassi, dolore pelvico e disfunzioni post-parto a Ferrara. Fisioterapista esperta in riabilitazione del pavimento pelvico." />
        <meta property="og:title" content="Riabilitazione Pavimento Pelvico | Isabella Cosetta Ferrara" />
        <meta property="og:description" content="Trattamenti professionali per il pavimento pelvico: incontinenza, prolassi, dolore pelvico. Studio a Ferrara." />
        <meta name="keywords" content="pavimento pelvico ferrara, fisioterapista pavimento pelvico, incontinenza ferrara, prolasso ferrara, riabilitazione pelvica" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Riabilitazione del Pavimento Pelvico",
            description: "Trattamento fisioterapico per incontinenza, prolassi e disfunzioni del pavimento pelvico",
            procedureType: "Therapeutic",
            followup: "Consulenza iniziale e piano di trattamento personalizzato",
          })}
        </script>
      </Helmet>
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/92 via-background/88 to-background/85" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Servizio Specialistico
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6"
              data-testid="text-page-title"
            >
              Riabilitazione del Pavimento Pelvico
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Un approccio professionale e delicato per recuperare la funzionalità
              del pavimento pelvico e migliorare la tua qualità di vita.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                Cos'è il Pavimento Pelvico?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Il pavimento pelvico è un insieme di muscoli, legamenti e tessuti
                connettivi che sostengono gli organi pelvici (vescica, utero,
                retto). Quando questi muscoli si indeboliscono o perdono
                funzionalità, possono insorgere diverse problematiche che
                impattano significativamente la qualità di vita.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La riabilitazione del pavimento pelvico è un trattamento
                conservativo, non invasivo e altamente efficace per recuperare la
                funzionalità di questa importante area del corpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                  Quando Rivolgersi a un Fisioterapista del Pavimento Pelvico
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  La riabilitazione del pavimento pelvico è indicata per diverse
                  condizioni:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {conditions.map((condition, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">
                        {condition}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Il Mio Approccio Terapeutico
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatmentApproach.map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-8">
              Benefici della Riabilitazione
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Un percorso di riabilitazione del pavimento pelvico personalizzato
              può portare a miglioramenti significativi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-base font-medium text-foreground">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-primary/5 border-primary/20">
              <div className="text-center space-y-6">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                  Inizia il Tuo Percorso di Benessere
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Prenota una prima consulenza per valutare insieme le tue
                  esigenze e definire un piano terapeutico personalizzato.
                </p>
                <Button
                  data-testid="button-cta-inline"
                  onClick={() =>
                    window.open("https://calendar.google.com", "_blank")
                  }
                  size="lg"
                  variant="default"
                  className="rounded-full px-8 mt-4"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Prenota Appuntamento
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Hai Domande?"
        description="Contattami per maggiori informazioni sui trattamenti per il pavimento pelvico o per prenotare una consulenza nel mio studio a Ferrara."
      />
    </div>
  );
}
