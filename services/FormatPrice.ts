export default function formatPrice(price: number) {
  // Convert the price to a string
  const priceString = price.toString();

  // Use regular expression to add commas every three digits from the right
  const formattedPrice = priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedPrice;
}
