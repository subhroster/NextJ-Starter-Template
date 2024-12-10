import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          tabIndex={-1}
        >
          Welcome Home
        </h1>
        <p className="text-lg text-muted-foreground">
          A modern template built with Next.js and shadcn/ui.
        </p>
      </section>

      {/* Features Section */}
      <section aria-labelledby="features" className="space-y-6">
        <h2 id="features" className="text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <div className="space-y-4">
          <Button variant="default" size="lg" className="w-full sm:w-auto">
            Click Me
          </Button>
          <p className="text-muted-foreground">
            This is the home page of our template.
          </p>
        </div>
      </section>
    </div>
  );
}
