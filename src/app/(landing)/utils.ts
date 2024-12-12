const calculateCredit = (variantId: number) => {
  switch (variantId) {
    // Basic
    case 549960:
      return 200;

    // Standard
    case 552257:
      return 800;

    // Premium
    case 552258:
      return 1600;

    default:
      return 0;
  }
};

export { calculateCredit };
