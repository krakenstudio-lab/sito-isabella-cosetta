import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/CTASection";
import {
  CheckCircle2,
  AlertCircle,
  Heart,
  Activity,
  Target,
  Calendar,
} from "lucide-react";

export default function DiastasiAddominale() {
  const symptoms = [
    "Addome prominente anche dopo il parto",
    "Debolezza della parete addominale",
    "Mal di schiena lombare",
    "Difficoltà nel ritorno all'attività fisica",
    "Sensazione di instabilità del core",
    "Problemi posturali",
  ];

  const treatmentPhases = [
    {
      icon: Heart,
      title: "Valutazione Iniziale",
      description:
        "Misurazione della diastasi e valutazione funzionale della parete addominale e del pavimento pelvico.",
    },
    {
      icon: Activity,
      title: "Riabilitazione Personalizzata",
      description:
        "Esercizi specifici per il recupero della linea alba e il rinforzo del core profondo.",
    },
    {
      icon: Target,
      title: "Ritorno all'Attività",
      description:
        "Progressione graduale verso le attività quotidiane e sportive con sicurezza e stabilità.",
    },
  ];

  const exercises = [
    "Attivazione del trasverso dell'addome",
    "Respirazione diaframmatica",
    "Esercizi ipopressivi",
    "Rinforzo del pavimento pelvico",
    "Stabilizzazione del core",
    "Postura e movimento funzionale",
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Diastasi Addominale Post-Parto Ferrara | Fisioterapista Isabella Cosetta</title>
        <meta name="description" content="Riabilitazione della diastasi dei retti addominali post-parto a Ferrara. Trattamenti personalizzati per recuperare la funzionalità della parete addominale." />
        <meta property="og:title" content="Diastasi Addominale Ferrara | Isabella Cosetta" />
        <meta property="og:description" content="Specialista in riabilitazione della diastasi addominale post-parto. Recupera la funzionalità del tuo core." />
        <meta name="keywords" content="diastasi addominale ferrara, diastasi post parto, fisioterapista diastasi, riabilitazione addominale ferrara, post gravidanza" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Riabilitazione della Diastasi Addominale",
            description: "Trattamento fisioterapico per la diastasi dei retti addominali post-parto",
            procedureType: "Therapeutic",
            followup: "Valutazione della diastasi e piano di recupero personalizzato",
          })}
        </script>
      </Helmet>
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop')",
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
              Riabilitazione della Diastasi Addominale
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Trattamento specializzato per recuperare la funzionalità della parete
              addominale dopo la gravidanza.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-serif font-semibold mb-6">
                Cos'è la Diastasi dei Retti Addominali?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                La diastasi dei retti addominali è una separazione eccessiva dei
                muscoli retti dell'addome che si verifica frequentemente durante la
                gravidanza a causa della distensione della linea alba, il tessuto
                connettivo che unisce i due muscoli retti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Questa condizione è molto comune dopo il parto e può persistere se
                non trattata adeguatamente, causando debolezza addominale,
                problemi posturali e difficoltà nel ritorno all'attività fisica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La buona notizia è che con un programma di riabilitazione
                specifico e progressivo, è possibile recuperare la funzionalità
                della parete addominale e migliorare significativamente i sintomi.
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
                  Sintomi e Segnali della Diastasi
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Riconosci uno o più di questi segnali? Potrebbe essere il
                  momento di una valutazione:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <Card key={index} className="hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">
                        {symptom}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Importante:</strong> La
                diastasi può manifestarsi anche mesi o anni dopo il parto. Non è
                mai troppo tardi per iniziare un percorso di riabilitazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-semibold mb-12 text-center">
              Le Fasi del Trattamento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatmentPhases.map((phase, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <phase.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-primary">
                      Fase {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
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
              Tecniche di Riabilitazione
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Il mio approccio alla riabilitazione della diastasi si basa su
              tecniche evidence-based e personalizzate:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercises.map((exercise, index) => (
                <div key={index} className="flex items-center gap-3 p-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="text-base font-medium text-foreground">
                    {exercise}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-background rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Approccio Integrato
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                È fondamentale ricordare che la diastasi non riguarda solo
                l'addome: lavoro in sinergia con il pavimento pelvico, il
                diaframma e la postura globale per un recupero completo e
                duraturo.
              </p>
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
                  Inizia il Tuo Percorso di Recupero
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Prenota una valutazione per misurare la diastasi e definire un
                  piano di trattamento su misura per te.
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
                  Prenota Valutazione
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Domande sulla Diastasi?"
        description="Contattami per maggiori informazioni sul trattamento della diastasi addominale o per prenotare una valutazione nel mio studio a Ferrara."
      />
    </div>
  );
}
