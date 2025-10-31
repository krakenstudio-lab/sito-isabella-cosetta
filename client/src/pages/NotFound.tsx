import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md text-center space-y-6">
        <div className="space-y-3">
          <h1 className="text-9xl font-serif font-bold text-primary">404</h1>
          <h2 className="text-3xl font-serif font-semibold text-foreground">
            Pagina Non Trovata
          </h2>
          <p className="text-lg text-muted-foreground">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/">
            <Button
              data-testid="button-home"
              variant="default"
              className="rounded-full gap-2"
            >
              <Home className="h-4 w-4" />
              Torna alla Home
            </Button>
          </Link>
          <Button
            data-testid="button-back"
            variant="outline"
            className="rounded-full gap-2"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Vai Indietro
          </Button>
        </div>
      </div>
    </div>
  );
}
