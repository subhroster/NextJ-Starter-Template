"use client";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { motion } from "framer-motion";
import { CalculatorBookmark } from "@/components/common/CalculatorBookmark";

interface CalculatorLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  calculatorId: string;
  onReset?: () => void;
}

export function CalculatorLayout({
  children,
  title,
  description,
  calculatorId,
  onReset,
}: CalculatorLayoutProps) {
  console.log("CalculatorLayout rendering", {
    children,
    title,
    description,
    calculatorId,
    onReset,
  });
  return (
    <div className="container mx-auto">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>

          <div className="flex gap-4">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={onReset}
                className="transition-colors hover:bg-primary/10"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <CalculatorBookmark calculatorId={calculatorId} title={title} />
            </motion.div>
          </div>
        </div>

        {children}
      </motion.div>
    </div>
  );
}
