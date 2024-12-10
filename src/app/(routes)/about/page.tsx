export default function About() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About Us
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn more about our company and mission.
        </p>
      </section>

      {/* Content Section */}
      <section className="space-y-6">
        <div className="prose dark:prose-invert">
          <p>
            We are a passionate team dedicated to creating amazing web
            experiences. Our focus is on delivering high-quality solutions that
            meet our clients' needs.
          </p>
          <h2>Our Mission</h2>
          <p>
            To provide innovative solutions that help businesses grow and
            succeed in the digital world.
          </p>
        </div>
      </section>
    </div>
  );
}
