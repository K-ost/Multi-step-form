// Price count
export const priceCount = (price: number, period: boolean): number => {
  return period ? price * 10 : price
}