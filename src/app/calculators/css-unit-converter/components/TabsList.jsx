import { TabsList as TabsListPrimitive } from "@/components/ui/tabs";
import { TabItem } from "./TabItem";
import { CONVERTERS } from "../lib/converters";

export function TabsList() {
  return (
    <div className="sticky top-4 rounded-lg bg-muted p-4">
      <TabsListPrimitive className="flex w-full flex-col">
        {Object.entries(CONVERTERS).map(([group, items]) => (
          <div key={group} className="space-y-2">
            <div className="text-sm font-medium uppercase tracking-wide text-primary">
              {group} Conversions
            </div>
            {items.map((item) => (
              <TabItem key={item.value} {...item} />
            ))}
          </div>
        ))}
      </TabsListPrimitive>
    </div>
  );
}
