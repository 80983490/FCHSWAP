import { Currency, ETHER, Token } from 'brtsswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'EHR'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
