import { TabsTrigger } from "@/components/ui/tabs";

interface TabItemProps {
  value: string;
  label: string;
  icon: any;
}

export function TabItem({ value, label, icon: Icon }: TabItemProps) {
  return (
    <TabsTrigger
      value={value}
      className="relative w-full pl-8 text-left transition-colors hover:bg-accent/80 data-[state=active]:before:absolute data-[state=active]:before:left-2 data-[state=active]:before:h-2 data-[state=active]:before:w-2 data-[state=active]:before:rounded-full data-[state=active]:before:bg-primary"
      role="tab"
      aria-label={label}
    >
      <span className="flex w-full min-w-0 items-center justify-between pr-2">
        <span className="truncate font-medium">{label}</span>
        <Icon className="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
      </span>
    </TabsTrigger>
  );
}
