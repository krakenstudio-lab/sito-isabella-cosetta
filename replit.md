# Isabella Cosetta - Fisioterapista

## Panoramica
Sito web professionale completo SEO-optimized per Isabella Cosetta, fisioterapista specializzata in riabilitazione del pavimento pelvico e diastasi addominale a Ferrara. Include blog SEO, testimonianze pazienti, FAQ e Google Analytics tracking.

## Obiettivi del Progetto
- Presentare i servizi professionali di fisioterapia specializzata
- Ottimizzazione SEO per ranking locale (Ferrara) con blog e contenuti
- Convertire visite in prenotazioni appuntamenti
- Trasmettere professionalità, competenza ed empatia
- Tracciare conversioni e traffico organico con Google Analytics

## Struttura del Sito
1. **Homepage** (`/`)
   - Hero section con immagine professionale e presentazione
   - Sezione "Chi Sono" con bio Isabella Cosetta
   - Card servizi principali (Pavimento Pelvico + Diastasi Addominale)
   - Testimonianze pazienti verificate (da database)
   - Perché scegliere lo studio
   - CTA per prenotazione appuntamenti

2. **Pavimento Pelvico** (`/pavimento-pelvico`)
   - Hero con immagine clinica professionale
   - Spiegazione dettagliata del pavimento pelvico
   - Condizioni trattate (incontinenza, prolassi, dolore pelvico, etc.)
   - Approccio terapeutico (valutazione, tecniche manuali, biofeedback)
   - Benefici della riabilitazione
   - CTA per consulenza

3. **Diastasi Addominale** (`/diastasi-addominale`)
   - Hero con immagine wellness/post-parto
   - Spiegazione della diastasi dei retti addominali
   - Sintomi e segnali (addome prominente, debolezza, mal di schiena)
   - Fasi del trattamento (valutazione, riabilitazione, ritorno attività)
   - Tecniche di riabilitazione (trasverso, respirazione, ipopressivi)
   - CTA per valutazione

4. **Blog** (`/blog`)
   - Lista articoli SEO su pavimento pelvico e diastasi
   - Articoli con excerpt, data, categoria
   - Navigazione verso singoli post

5. **Blog Post** (`/blog/:slug`)
   - Articolo completo con HTML formattato
   - Meta tags SEO unici per ogni post
   - Schema.org Article markup
   - Tempo di lettura stimato
   - CTA finale per consulenza

6. **FAQ** (`/faq`)
   - 10 domande frequenti con accordion Shadcn
   - Schema.org FAQPage markup
   - Copertura completa: trattamenti, costi, durata, preparazione
   - CTA per domande personalizzate

## Componenti Principali
- `Header`: Navigazione sticky con logo, menu responsive (Home, Pavimento Pelvico, Diastasi, Blog, FAQ), CTA header
- `Footer`: Info studio (indirizzo Ferrara, contatti, orari), schema markup SEO
- `CTASection`: Componente riusabile per call-to-action con Google Analytics tracking
- `TestimonialsSection`: Carica testimonianze verificate dal database, display con stelle rating
- `GoogleAnalytics`: Integrazione GA4 con VITE_GA_ID env variable
- Pagine complete con hero sections professionali con immagini, contenuti informativi, cards

## SEO & Schema Markup
- Meta tags ottimizzati per ogni pagina con focus su Ferrara + keywords specifiche
- Open Graph tags per condivisione social su tutte le pagine
- Schema.org structured data:
  - MedicalBusiness (homepage e footer)
  - MedicalProcedure (pagine servizi)
  - Article (blog posts)
  - FAQPage (pagina FAQ)
- Keywords local SEO: fisioterapista Ferrara, pavimento pelvico ferrara, diastasi addominale ferrara, riabilitazione post-parto
- Blog articles per long-tail keywords e ranking organico

## Design System
- **Colori**: Verde salvia professionale (primary: HSL 158 38% 42%) per trust e salute
- **Tipografia**: Lora (serif) per headings, Inter (sans-serif) per body
- **Approccio**: Healthcare professionale - rassicurante ma competente
- **Spacing**: Generoso (py-20, py-24) per layout calming
- **Components**: Shadcn UI con hover-elevate interactions

## Link Esterni
- CTA "Prenota Appuntamento" → `https://calendar.google.com` (placeholder da configurare con Google Calendar del cliente)

## Stack Tecnico
- React + TypeScript frontend
- Wouter per routing client-side
- Tailwind CSS + Shadcn UI components
- Vite build system
- Express + Drizzle ORM backend
- PostgreSQL database (Neon serverless)
- TanStack Query per data fetching
- react-helmet-async per SEO dinamico

## Database Schema
- `blog_posts`: id, title, slug, excerpt, content, category, publishedAt, seoTitle, seoDescription, seoKeywords
- `testimonials`: id, patientName, treatmentType, rating, reviewText, verified, publishedAt
- `users`: (autenticazione futura)

## Note Sviluppo
- Full-stack application con persistenza database
- Blog articles salvati in PostgreSQL, gestibili tramite API
- Testimonianze verificate salvate in DB
- Mobile-first responsive design
- Accessibility: ARIA labels, semantic HTML, contrast ratios, data-testid per testing
- Performance: TanStack Query caching, lazy loading, ottimizzazione font
- Google Analytics tracking su CTA clicks e page views

## Analytics & Tracking
- Google Analytics 4 integrato con env variable VITE_GA_ID
- Event tracking su tutti i CTA button clicks
- Page view tracking automatico

## Prossimi Passi Futuri
- Configurare link Google Calendar reale con calendario del cliente
- Admin panel per gestire blog posts e testimonianze
- Form contatto con backend email
- Integrazione diretta Google Calendar Booking API (alternativa a link esterno)
- Newsletter signup per blog updates
