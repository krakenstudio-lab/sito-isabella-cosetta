import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTASection({
  title = "Pronta a Prenderti Cura di Te?",
  description = "Prenota una consulenza personalizzata per iniziare il tuo percorso di benessere. Ti aspetto nel mio studio a Ferrara.",
  buttonText = "Richiedi un Appuntamento",
}: CTASectionProps) {
  const trackEvent = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'engagement',
        event_label: buttonText,
      });
    }
    window.open("https://calendar.google.com", "_blank");
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="pt-4">
            <Button
              data-testid="button-cta-section"
              onClick={trackEvent}
              size="lg"
              variant="default"
              className="rounded-full px-8"
            >
              <Calendar className="h-5 w-5 mr-2" />
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
