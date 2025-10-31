import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/pavimento-pelvico", label: "Pavimento Pelvico" },
    { href: "/diastasi-addominale", label: "Diastasi Addominale" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3 transition-colors cursor-pointer">
              <div className="flex flex-col">
                <span className="text-xl font-serif font-semibold text-foreground">
                  Isabella Cosetta
                </span>
                <span className="text-xs text-muted-foreground tracking-wide">
                  Fisioterapista
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              data-testid="button-cta-header"
              onClick={() =>
                window.open("https://calendar.google.com", "_blank")
              }
              variant="default"
              className="rounded-full"
            >
              Prenota Appuntamento
            </Button>
          </nav>

          <button
            data-testid="button-mobile-menu"
            className="md:hidden hover-elevate active-elevate-2 p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-4" data-testid="mobile-menu">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              data-testid="button-cta-mobile"
              onClick={() => {
                window.open("https://calendar.google.com", "_blank");
                setIsMobileMenuOpen(false);
              }}
              variant="default"
              className="w-full rounded-full"
            >
              Prenota Appuntamento
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
