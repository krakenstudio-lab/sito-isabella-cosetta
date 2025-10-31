# Design Guidelines: Isabella Cosetta Fisioterapia

## Design Approach
**Selected Approach**: Reference-Based (Healthcare/Wellness)
Drawing inspiration from modern healthcare and wellness platforms that balance professionalism with warmth and approachability. The design should evoke trust, competence, and comfort—essential for sensitive healthcare services.

**Key Design Principles**:
- Professional credibility with accessible warmth
- Spacious, calming layouts that reduce anxiety
- Clear information hierarchy for medical content
- Trust-building through visual consistency
- Subtle, reassuring aesthetic without clinical coldness

## Typography System

**Primary Font**: 'Lora' (serif) - for headings and emphasis
- H1: 3.5rem (56px) / font-weight: 600 / line-height: 1.1
- H2: 2.5rem (40px) / font-weight: 600 / line-height: 1.2
- H3: 1.875rem (30px) / font-weight: 500 / line-height: 1.3

**Secondary Font**: 'Inter' (sans-serif) - for body text and UI
- Body Large: 1.125rem (18px) / font-weight: 400 / line-height: 1.7
- Body Regular: 1rem (16px) / font-weight: 400 / line-height: 1.6
- Small Text: 0.875rem (14px) / font-weight: 400 / line-height: 1.5
- CTA Buttons: 1rem (16px) / font-weight: 600 / uppercase letter-spacing

## Layout System

**Spacing Scale**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component internal spacing: p-6, p-8
- Section padding vertical: py-16 (mobile), py-24 (desktop)
- Section padding horizontal: px-6 (mobile), px-8 (tablet), container max-w-6xl (desktop)
- Card spacing: space-y-6 for content stacks
- Grid gaps: gap-8 to gap-12

**Container Strategy**:
- Full-width hero sections with inner max-w-7xl
- Content sections: max-w-6xl centered
- Text-heavy content: max-w-4xl for optimal readability

## Component Library

### Navigation
- Sticky header with subtle shadow on scroll
- Logo left-aligned, navigation center/right
- Mobile: Hamburger menu with full-screen overlay
- CTA button prominently placed in navigation
- Navigation links: subtle underline animation on hover

### Hero Section (Homepage)
- Full-width hero with professional photograph
- Height: 85vh on desktop, 70vh on mobile
- Content overlay: left-aligned or centered with max-w-2xl
- Hero image: Professional portrait of Isabella in clinical setting or warm consultation environment
- Headline + subheadline + primary CTA
- Buttons with blurred backdrop (backdrop-blur-sm bg-white/90)

### Service Cards
- Grid layout: 1 column mobile, 2 columns desktop (grid-cols-1 md:grid-cols-2)
- Card structure: Image top, content below with p-8
- Rounded corners: rounded-xl
- Hover effect: subtle lift (transform translateY)
- Each card includes: Title (H3), description, benefits list, CTA link

### Trust Elements
- Credentials section: clean presentation of qualifications and certifications
- Before/After considerations (if appropriate): side-by-side comparison layout
- Testimonial cards: patient quotes with subtle quotation marks, 2-column grid on desktop

### Service Detail Pages
- Hero banner: 50vh with service-specific imagery
- Content structure: max-w-4xl prose formatting
- Information blocks: alternating image-text layouts
- Benefits/symptoms lists: icon-free, clean bullet points with check marks
- FAQ accordion: expandable sections with smooth transitions

### Call-to-Action Sections
- Full-width sections with py-20
- Centered content: headline + supporting text + button
- Primary CTA: "Richiedi un Appuntamento" - prominent sizing (px-8 py-4)
- Button style: rounded-full with confident padding

### Footer
- Multi-column layout: 3 columns desktop, stacked mobile
- Column 1: Studio info (address in Ferrara, phone, email)
- Column 2: Quick links to pages and services
- Column 3: Office hours, social links (if applicable)
- Bottom bar: Copyright, privacy policy, credentials mention

## Images

**Required Images**:
1. **Homepage Hero**: Professional portrait of Isabella in clinical/consultation setting - warm, trustworthy, approachable (1920x1080px minimum)
2. **Service Page - Pavimento Pelvico**: Clinical but sensitive imagery showing consultation or gentle treatment environment (1200x800px)
3. **Service Page - Diastasi Addominale**: Educational imagery or consultation scene related to post-partum recovery (1200x800px)
4. **About Section**: Secondary portrait or studio environment photo showing professional space in Ferrara (800x600px)
5. **Trust Building**: Optional certification/credential visuals, studio exterior/interior

**Image Treatment**: All images should have subtle overlays where text is placed, maintaining readability while preserving image quality.

## Responsive Behavior

**Breakpoints**:
- Mobile: base (< 768px)
- Tablet: md (768px - 1024px)
- Desktop: lg (1024px+)

**Mobile Optimizations**:
- Hero heights reduced to 70vh
- Multi-column grids collapse to single column
- Navigation converts to hamburger menu
- Font sizes scale down: H1 to 2.5rem, body to 1rem
- Padding reduces: py-24 becomes py-12, px-8 becomes px-6
- CTA buttons remain full-width on mobile for easy tapping

## Accessibility

- All interactive elements minimum 44x44px touch target
- Form inputs with clear labels and visible focus states
- Consistent focus indicator: 2px ring with offset
- Semantic HTML throughout (nav, main, section, article)
- Alt text for all images describing content and context
- ARIA labels for icon-only buttons

## SEO Optimization Elements

- Schema markup for MedicalBusiness and Physician
- Meta descriptions emphasizing Ferrara location and specializations
- H1 tags with location and service keywords
- Structured headings hierarchy (H1 → H2 → H3)
- Internal linking between service pages
- Local business structured data with Ferrara address
- Fast-loading images (optimized, lazy-loaded below fold)