import React from "react";
import { Box, Percent, Ruler } from "lucide-react";
import {
  remToPxAtom,
  remToEmAtom,
  remToPercentAtom,
} from "../atoms/unitConverter";
import { UnitConverter } from "../components/UnitConverter";

type ConverterType = {
  value: string;
  label: string;
  icon: React.ElementType;
  description: string;
  component: React.FC;
};

export const CONVERTERS: Record<string, ConverterType[]> = {
  rem: [
    {
      value: "remtopx",
      label: "REM to PX",
      icon: Ruler,
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
      icon: Box,
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
    {
      value: "remtopercent",
      label: "REM to %",
      icon: Percent,
      description: "Convert REM to percentage values",
      component: () => (
        <UnitConverter
          type="remtopercent"
          atom={remToPercentAtom}
          title="REM to Percentage Converter"
          description="Convert REM units to percentage values."
        />
      ),
    },
  ],
};
