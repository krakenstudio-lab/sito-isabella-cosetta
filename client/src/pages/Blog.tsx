import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blog Salute Pelvica e Diastasi | Isabella Cosetta Ferrara</title>
        <meta
          name="description"
          content="Articoli informativi su pavimento pelvico, diastasi addominale, riabilitazione post-parto e salute femminile. Consigli di fisioterapia a Ferrara."
        />
        <meta property="og:title" content="Blog Salute Pelvica | Isabella Cosetta" />
        <meta
          property="og:description"
          content="Scopri articoli professionali su pavimento pelvico, diastasi e salute femminile."
        />
        <meta name="keywords" content="blog fisioterapia, pavimento pelvico, diastasi addominale, salute femminile ferrara" />
      </Helmet>

      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Calendar className="h-4 w-4" />
                Blog &amp; Risorse
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Salute Pelvica e Benessere
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Articoli informativi e consigli professionali su pavimento pelvico,
              diastasi addominale e riabilitazione post-parto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="hover-elevate">
                  <div className="h-48 bg-muted animate-pulse" />
                  <CardHeader>
                    <div className="h-6 bg-muted animate-pulse rounded mb-2" />
                    <div className="h-4 bg-muted animate-pulse rounded w-2/3" />
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="hover-elevate active-elevate-2 overflow-hidden"
                  data-testid={`card-blog-${post.id}`}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-primary/40" />
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.publishedAt.toString()}>
                        {formatDate(post.publishedAt.toString())}
                      </time>
                      <span className="mx-2">•</span>
                      <span className="text-primary font-medium">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-serif font-semibold text-foreground line-clamp-2">
                      {post.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button
                        variant="ghost"
                        className="group w-full"
                        data-testid={`button-read-${post.id}`}
                      >
                        Leggi Articolo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nessun articolo disponibile al momento.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
