import { RulerIcon, BoxIcon, PercentIcon } from "@radix-ui/react-icons";

export const CONVERTERS = {
  rem: [
    {
      value: "remtopx",
      label: "REM to PX",
      icon: RulerIcon,
      description: "Convert REM units to pixels based on root font size",
      convert: (value: number, rootSize: number) => value * rootSize,
      unit: "px"
    },
    // ... other converters
  ]
};

export const DEFAULT_VALUES = {
  input: "1",
  rootFontSize: "16",
  activeTab: "remtopx"
};
