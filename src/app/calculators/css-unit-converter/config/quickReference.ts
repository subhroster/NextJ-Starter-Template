export const getQuickReference = (type: string) => {
  const references = {
    remtopx: [
      '1rem = 16px (default root font size)',
      'Use rem for consistent scaling across devices',
      'Values adapt to user font size settings'
    ],
    remtoem: [
      '1rem = 1em (at root level)',
      'em units are relative to parent element',
      'Useful for component-level scaling'
    ],
    remtopercent: [
      '1rem = 100% (of root font size)',
      'Percentage values are relative to container',
      'Ideal for fluid layouts and responsive design'
    ]
  };
  
  return references[type] || [];
};