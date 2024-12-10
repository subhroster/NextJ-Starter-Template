import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Contact Us
        </h1>
        <p className="text-lg text-muted-foreground">
          Get in touch with our team.
        </p>
      </section>

      {/* Contact Information */}
      <section className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">Email Us</h2>
            <p className="mt-2 text-muted-foreground">contact@example.com</p>
            <Button className="mt-4">Send Email</Button>
          </div>
          <div className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">Call Us</h2>
            <p className="mt-2 text-muted-foreground">+1 (555) 123-4567</p>
            <Button className="mt-4" variant="outline">
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
