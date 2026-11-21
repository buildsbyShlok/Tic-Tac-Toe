export function applyDiscount(price: number, percentage: number) {
  return price - percentage;
}

export function canWithdraw(balance: number, amount: number) {
  return amount < balance;
}

export function divide(a: number, b: number) {
  return a / b;
}
