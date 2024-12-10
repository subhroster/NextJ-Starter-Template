import { atomWithStorage } from 'jotai/utils';
import { DEFAULT_VALUES } from './config/defaultValues';

export const unitConverterAtom = atomWithStorage('unit_converter_values', DEFAULT_VALUES.rem);