import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function FAQ() {
  const faqs = [
    {
      question: "Cosa si intende per riabilitazione del pavimento pelvico?",
      answer:
        "La riabilitazione del pavimento pelvico è un trattamento fisioterapico specializzato che mira a migliorare la funzionalità dei muscoli e dei tessuti che sostengono gli organi pelvici. Comprende valutazione, esercizi mirati, tecniche manuali e utilizzo di strumenti come il biofeedback per recuperare o migliorare il controllo della continenza, ridurre il dolore pelvico e migliorare la qualità di vita.",
    },
    {
      question: "Chi può beneficiare della riabilitazione del pavimento pelvico?",
      answer:
        "La riabilitazione è indicata per donne che soffrono di incontinenza urinaria o fecale, prolassi degli organi pelvici, dolore pelvico cronico, disfunzioni sessuali, o problematiche post-parto. È utile anche in prevenzione per donne in gravidanza o che praticano sport ad alto impatto.",
    },
    {
      question: "Cos'è la diastasi addominale e come si riconosce?",
      answer:
        "La diastasi dei retti addominali è una separazione dei muscoli addominali centrali che può verificarsi durante la gravidanza o il post-parto. Si riconosce da un addome prominente anche dopo mesi dal parto, debolezza della parete addominale, mal di schiena lombare e difficoltà nel mantenere la postura. Una valutazione professionale può confermarne la presenza e il grado di severità.",
    },
    {
      question: "La diastasi addominale si può risolvere senza chirurgia?",
      answer:
        "Nella maggior parte dei casi sì! La riabilitazione fisioterapica con esercizi specifici per il rinforzo del trasverso dell'addome, tecniche respiratorie e ipopressivi può ridurre significativamente la diastasi e migliorare la funzionalità addominale. Solo nei casi più severi potrebbe essere necessario valutare un intervento chirurgico.",
    },
    {
      question: "Quanto dura un percorso di riabilitazione?",
      answer:
        "La durata varia in base alla problematica e alla risposta individuale al trattamento. In generale, un percorso di riabilitazione del pavimento pelvico può richiedere da 8 a 16 sedute distribuite su 2-4 mesi. Per la diastasi addominale, il percorso può essere simile. Durante la prima visita verrà stabilito un piano personalizzato.",
    },
    {
      question: "Le sedute sono dolorose?",
      answer:
        "No, le sedute non sono dolorose. Il trattamento viene sempre adattato alle tue sensazioni e ai tuoi tempi. Alcune tecniche manuali potrebbero causare un leggero fastidio temporaneo, ma vengono sempre eseguite nel rispetto del tuo comfort. L'obiettivo è sempre il tuo benessere.",
    },
    {
      question: "Posso iniziare la riabilitazione durante la gravidanza?",
      answer:
        "Sì! La riabilitazione del pavimento pelvico può essere molto utile durante la gravidanza per prevenire problematiche post-parto, preparare il perineo al parto e mantenere una buona funzionalità muscolare. Il programma viene adattato al trimestre di gravidanza e alle tue condizioni specifiche.",
    },
    {
      question: "Quanto tempo dopo il parto posso iniziare la riabilitazione?",
      answer:
        "Per la riabilitazione del pavimento pelvico, è consigliabile aspettare almeno 6 settimane dopo il parto (8-10 settimane in caso di cesareo). Per la diastasi addominale, si può iniziare una valutazione già dopo 6-8 settimane, anche se il percorso intensivo spesso inizia dopo 2-3 mesi dal parto quando i tessuti si sono stabilizzati.",
    },
    {
      question: "Le sedute sono coperte dal Sistema Sanitario Nazionale?",
      answer:
        "Il Sistema Sanitario Nazionale prevede la riabilitazione del pavimento pelvico in alcune strutture pubbliche, ma spesso con lunghe liste d'attesa. Le sedute nel mio studio privato sono a pagamento, ma offrono maggiore flessibilità negli orari e un percorso personalizzato. È possibile richiedere un preventivo dettagliato durante la prima consulenza.",
    },
    {
      question: "Cosa devo portare alla prima visita?",
      answer:
        "Porta con te eventuali referti medici o esami diagnostici recenti relativi alla tua problematica (ecografie, risonanze, visite specialistiche). Indossa abbigliamento comodo. Durante la prima visita effettueremo una valutazione completa e discuteremo insieme il percorso terapeutico più adatto a te.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Domande Frequenti (FAQ) | Isabella Cosetta Fisioterapista Ferrara</title>
        <meta
          name="description"
          content="Risposte alle domande frequenti su riabilitazione del pavimento pelvico, diastasi addominale, durata trattamenti e costi. Studio fisioterapia a Ferrara."
        />
        <meta property="og:title" content="FAQ Fisioterapia Pelvica | Isabella Cosetta" />
        <meta
          property="og:description"
          content="Trova risposte alle domande più frequenti su pavimento pelvico e diastasi addominale."
        />
        <meta
          name="keywords"
          content="faq fisioterapia, pavimento pelvico domande, diastasi addominale costi, riabilitazione ferrara"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Domande Frequenti
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Risposte alle domande più comuni su riabilitazione del pavimento pelvico e
              diastasi addominale.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 hover-elevate"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger
                  className="text-left font-semibold text-foreground hover:text-primary"
                  data-testid={`button-faq-question-${index}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-muted-foreground leading-relaxed pt-2"
                  data-testid={`text-faq-answer-${index}`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title="Hai Altre Domande?"
        description="Non hai trovato la risposta che cercavi? Contattami per una consulenza personalizzata."
        buttonText="Prenota Consulenza"
      />
    </div>
  );
}
