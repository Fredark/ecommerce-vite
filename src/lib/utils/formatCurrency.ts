export const formatCurrency = (price_in_cents: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price_in_cents / 100)
