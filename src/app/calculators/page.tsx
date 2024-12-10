"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, Code, Palette, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const toolCategories = [
  {
    icon: Calculator,
    title: "CSS Calculators",
    description: "Convert units, check contrast, generate layouts with ease",
    tools: [
      <Link href="/calculators/css-unit-converter" key="unit">
        CSS Unit Converter
      </Link>,
      "Flexbox Generator",
      "Grid Generator",
    ],
  },
  {
    icon: Palette,
    title: "Design Tools",
    description: "Create beautiful effects and color combinations",
    tools: ["Glassmorphism", "Border Radius", "Color Converter"],
  },
  {
    icon: Layout,
    title: "Layout Helpers",
    description: "Build responsive and accessible layouts quickly",
    tools: ["Typography Scale", "Contrast Checker"],
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <h1 className="mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-5xl font-bold text-transparent">
          Web Development Tools
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Essential calculators and generators for modern web development.
          Streamline your workflow with our interactive tools.
        </p>
        <Button asChild size="lg">
          <Link href="/calculators">
            <Calculator className="mr-2 h-5 w-5" />
            Explore Tools
          </Link>
        </Button>
      </motion.section>

      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {toolCategories.map((category) => (
          <motion.div key={category.title} whileHover={{ y: -5 }}>
            <Card>
              <CardContent className="pt-6">
                <category.icon className="mb-4 h-8 w-8 text-primary" />
                <h2 className="mb-3 text-xl font-semibold">{category.title}</h2>
                <p className="mb-4 text-muted-foreground">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li key={tool} className="text-sm text-muted-foreground">
                      • {tool}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
