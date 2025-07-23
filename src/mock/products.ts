export const bestSellers = Array.from({ length: 30 }, (_, i) => {
  const index = i + 1;
  return {
    id: `product-${index}`,
    name: 'Lọc gió động cơ Air Filter – Chevrolet Co...',
    price: 299000,
    originalPrice: 329000,
    discountPercent: 10,
    imageUrl: `/categories/img (${(index % 4) + 1}).png`,
  };
});