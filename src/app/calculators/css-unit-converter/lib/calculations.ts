export const calculateConversion = (value: string, baseSize: string, converterType: string) => {
  const numValue = parseFloat(value) || 0;
  const baseSizeValue = parseFloat(baseSize) || 16;

  switch (converterType) {
    case 'remtopx':
      return `${(numValue * baseSizeValue).toFixed(2)}px`;
    case 'remtoem':
      return `${numValue.toFixed(2)}em`;
      
      case 'remtopercent':
        return `${(numValue * baseSizeValue * 6.25).toFixed(2)}%`;
    default:
      return "0";
  }
};
