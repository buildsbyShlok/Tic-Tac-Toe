export function calculateDiscount(price: number, discount: number) {
  const finalPrice = price - discount;
  return finalPrice;
}

export function getUserName(user: any) {
  return user.name;
}
