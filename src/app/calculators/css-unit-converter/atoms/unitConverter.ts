import { atomWithStorage } from 'jotai/utils';

interface UnitConverterState {
  input: string;
  output: string;
  baseSize: string;
  inputUnit: string;
  outputUnit: string;
}

export const remToPxAtom = atomWithStorage<UnitConverterState>('rem_to_px_values', {
  input: "1",
  output: "16px",
  baseSize: "16",
  inputUnit: "rem",
  outputUnit: "px"
});

export const remToEmAtom = atomWithStorage<UnitConverterState>('rem_to_em_values', {
  input: "1",
  output: "1em",
  baseSize: "16",
  inputUnit: "rem",
  outputUnit: "em"
});

export const remToPercentAtom = atomWithStorage<UnitConverterState>('rem_to_percent_values', {
    input: "1",
    output: "100%",
    baseSize: "16",
    inputUnit: "rem",
    outputUnit: "%"
  });
  