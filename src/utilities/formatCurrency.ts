const CURRENCY_FORMATTER = new Intl.NumberFormat();

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
