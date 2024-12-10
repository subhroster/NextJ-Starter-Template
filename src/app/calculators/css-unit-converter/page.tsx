"use client";
import { CalculatorLayout } from "@/components/layout/CalculatorLayout";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { TabsList } from "./components/TabsList";
import { CONVERTERS } from "./lib/converters";

export default function CssUnitConverter() {
  return (
    <CalculatorLayout
      title="CSS Unit Converter"
      description="Convert between different CSS units for responsive and accessible web design"
      calculatorId="css-unit-converter"
    >
      <Card className="p-6">
        <Tabs
          defaultValue="remtopx"
          className="flex flex-col gap-8 md:flex-row"
        >
          <div className="w-full shrink-0 md:w-[300px]">
            <TabsList />
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
