"use client";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { UnitConverter } from "./components/UnitConverter";
import { useAtom } from "jotai";
import { remToPxAtom, remToEmAtom } from "./atoms/unitConverter";

const CONVERTERS = {
  rem: [
    {
      value: "remtopx",
      label: "REM to PX",
      description: "Convert REM units to pixels based on root font size",
      component: () => (
        <UnitConverter
          type="remtopx"
          atom={remToPxAtom}
          title="REM to Pixels Converter"
          description="Convert REM units to pixels based on the root font size."
        />
      ),
    },
    {
      value: "remtoem",
      label: "REM to EM",
      description: "Convert REM to EM units for component-level scaling",
      component: () => (
        <UnitConverter
          type="remtoem"
          atom={remToEmAtom}
          title="REM to EM Converter"
          description="Convert REM units to EM units."
        />
      ),
    },
  ],
};

export default function CssUnitConverter() {
  const [, setValues] = useAtom(remToPxAtom);

  const handleReset = () => {
    setValues({
      input: "1",
      output: "16px",
      baseSize: "16",
      inputUnit: "rem",
      outputUnit: "px",
    });
  };

  return (
    <CalculatorLayout
      title="CSS Unit Converter"
      description="Convert between different CSS units for responsive and accessible web design"
      calculatorId="css-unit-converter"
      onReset={handleReset}
    >
      <Card className="p-6">
        <Tabs
          defaultValue="remtopx"
          className="flex flex-col gap-8 md:flex-row"
        >
          <div className="w-full shrink-0 md:w-[300px]">
            <div className="sticky top-4 rounded-lg bg-muted p-4">
              <TabsList className="flex w-full flex-col">
                {Object.entries(CONVERTERS).map(([group, items]) => (
                  <div key={group} className="space-y-2">
                    <div className="text-sm font-medium uppercase tracking-wide text-primary">
                      {group} Conversions
                    </div>
                    {items.map((item) => (
                      <TabsTrigger
                        key={item.value}
                        value={item.value}
                        className="w-full justify-start"
                      >
                        {item.label}
                      </TabsTrigger>
                    ))}
                  </div>
                ))}
              </TabsList>
            </div>
          </div>

          <div className="flex-1">
            {Object.values(CONVERTERS)
              .flat()
              .map(({ value, component: Component }) => (
                <TabsContent key={value} value={value}>
                  <Component />
                </TabsContent>
              ))}
          </div>
        </Tabs>
      </Card>
    </CalculatorLayout>
  );
}
