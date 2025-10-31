import { Helmet } from "react-helmet-async";
import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { Link } from "wouter";
import { CTASection } from "@/components/CTASection";
import type { BlogPost } from "@shared/schema";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();

  const { data: post, isLoading } = useQuery<BlogPost>({
    queryKey: ["/api/blog", slug],
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const estimatedReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="h-8 bg-muted animate-pulse rounded mb-6 w-1/3" />
          <div className="h-12 bg-muted animate-pulse rounded mb-4" />
          <div className="h-6 bg-muted animate-pulse rounded mb-12 w-1/2" />
          <div className="space-y-4">
            <div className="h-4 bg-muted animate-pulse rounded" />
            <div className="h-4 bg-muted animate-pulse rounded" />
            <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-3xl font-serif font-bold mb-6">Articolo non trovato</h1>
          <p className="text-muted-foreground mb-8">
            L'articolo che stai cercando non esiste o è stato rimosso.
          </p>
          <Button onClick={() => setLocation("/blog")} data-testid="button-back-to-blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Torna al Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{post.seoTitle || `${post.title} | Isabella Cosetta Ferrara`}</title>
        <meta
          name="description"
          content={post.seoDescription || post.excerpt}
        />
        {post.seoKeywords && <meta name="keywords" content={post.seoKeywords} />}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            author: {
              "@type": "Person",
              name: "Isabella Cosetta",
              jobTitle: "Fisioterapista",
            },
          })}
        </script>
      </Helmet>

      <article className="py-12 md:py-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8"
              data-testid="button-back-to-blog-top"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Torna al Blog
            </Button>
          </Link>

          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1
              className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6"
              data-testid="text-blog-title"
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt.toString()}>
                  {formatDate(post.publishedAt.toString())}
                </time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{estimatedReadTime(post.content)} min di lettura</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="blog-content"
              data-testid="text-blog-content"
            />
          </div>

          <div className="border-t pt-8">
            <Link href="/blog">
              <Button variant="outline" data-testid="button-back-to-blog-bottom">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Torna al Blog
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <CTASection
        title="Hai Bisogno di Aiuto?"
        description="Prenota una consulenza personalizzata per discutere le tue esigenze specifiche."
        buttonText="Prenota Consulenza"
      />
    </div>
  );
}
