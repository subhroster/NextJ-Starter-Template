"use client";
import { useAtom } from "jotai";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { calculateConversion } from "../lib/calculations";

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
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="mb-3 block text-sm font-medium leading-none">
            Base Font Size (px)
          </label>
          <div className="flex max-w-[8rem] items-center gap-2">
            <Input
              type="number"
              value={values.baseSize}
              onChange={handleBaseSizeChange}
              min="1"
              placeholder="16"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-3 block text-sm font-medium leading-none">
              {values.inputUnit.toUpperCase()} Value
            </label>
            <div className="flex max-w-md items-center gap-2">
              <Input
                type="number"
                value={values.input}
                onChange={handleInputChange}
                placeholder={`Enter value in ${values.inputUnit}`}
                min="0"
                step="0.1"
              />
            </div>
          </div>

          {values.output && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <label className="block text-sm font-medium leading-none">
                {values.outputUnit.toUpperCase()} Value
              </label>
              <div className="flex max-w-md items-center gap-2">
                <div className="flex-1 rounded-md bg-muted p-3 font-mono">
                  {values.output}
                  {values.outputUnit}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
