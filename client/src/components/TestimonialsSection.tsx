import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
    });
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Testimonianze dei Pazienti
            </h2>
            <p className="text-lg text-muted-foreground">
              Cosa dicono le persone che ho seguito
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-64 bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Testimonianze dei Pazienti
          </h2>
          <p className="text-lg text-muted-foreground">
            Cosa dicono le persone che ho seguito nel loro percorso di riabilitazione
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="hover-elevate"
              data-testid={`card-testimonial-${testimonial.id}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                        data-testid={`star-${testimonial.id}-${i}`}
                      />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      Verificata
                    </span>
                  )}
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p
                    className="text-muted-foreground leading-relaxed pl-6"
                    data-testid={`text-review-${testimonial.id}`}
                  >
                    {testimonial.reviewText}
                  </p>
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p
                        className="font-medium text-foreground"
                        data-testid={`text-patient-name-${testimonial.id}`}
                      >
                        {testimonial.patientName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.treatmentType}
                      </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(testimonial.publishedAt.toString())}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
