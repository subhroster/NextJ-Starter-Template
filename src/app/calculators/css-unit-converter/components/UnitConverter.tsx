"use client";
import { useAtom } from "jotai";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { calculateConversion } from "../lib/calculations";
import { Info } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getQuickReference } from "../config/quickReference";

interface UnitConverterProps {
  type: string;
  title: string;
  description: string;
  atom: any;
}

export function UnitConverter({
  type,
  title,
  description,
  atom,
}: UnitConverterProps) {
  const [values, setValues] = useAtom(atom);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setValues((prev) => ({
      ...prev,
      input,
      output: calculateConversion(input, values.baseSize, type),
    }));
  };

  const handleBaseSizeChange = (event) => {
    const baseSize = event.target.value;
    setValues((prev) => ({
      ...prev,
      baseSize,
      output: calculateConversion(values.input, baseSize, type),
    }));
  };

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
      aria-label={`${title} Calculator`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <Info className="h-5 w-5 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <div className="max-w-xs space-y-2">
                <p>Learn more about CSS units:</p>
                <Link
                  href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MDN Web Docs: CSS Values and Units
                </Link>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="rounded-lg bg-muted/50 p-4">
          <h3 className="mb-2 text-sm font-medium">Quick Reference</h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {getQuickReference(type).map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="baseSize"
            className="mb-3 block text-sm font-medium leading-none"
          >
            Base Font Size (px)
            <span className="ml-2 text-xs text-muted-foreground">
              Default browser font size is 16px
            </span>
          </label>
          <div className="flex max-w-[8rem] items-center gap-2">
            <Input
              id="baseSize"
              type="number"
              value={values.baseSize}
              onChange={handleBaseSizeChange}
              min="1"
              placeholder="16"
              aria-describedby="baseSizeHelp"
            />
          </div>
          <p id="baseSizeHelp" className="mt-1 text-xs text-muted-foreground">
            Adjust this value to match your project's root font size
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="unitInput"
              className="mb-3 block text-sm font-medium leading-none"
            >
              {values.inputUnit.toUpperCase()} Value
              <span className="ml-2 text-xs text-muted-foreground">
                Enter a value to convert
              </span>
            </label>
            <div className="flex max-w-md items-center gap-2">
              <Input
                id="unitInput"
                type="number"
                value={values.input}
                onChange={handleInputChange}
                placeholder={`Enter value in ${values.inputUnit}`}
                min="0"
                step="0.1"
                aria-describedby="conversionResult"
              />
            </div>
          </div>

          {values.output && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <label
                id="conversionResult"
                className="block text-sm font-medium leading-none"
              >
                Converted Value
              </label>
              <div className="flex max-w-md items-center gap-2">
                <div
                  className="flex-1 rounded-md bg-muted p-3 font-mono"
                  aria-live="polite"
                >
                  {values.output}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
