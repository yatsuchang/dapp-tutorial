// API's
// https://apilayer.com/marketplace/fixer-api?live_demo=show
// https://restcountries.com/#api-endpoints-v2-list-of-codes
// Exchange Rate: API_KEY
// Countries: https://restcountries.com/v3.1/currency/USD

// 1st function - getExchangeRate
// 2nd function - getCountries
// 3rd function - convertCurrency
// -------------------------------

// 1st function - getExchangeRate
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: {
    'apiKey': process.env.REACT_APP_APILAYER_API_KEY
  }
};
export const getExchangeRate = async (fromCurrency, toCurrency) => {
  let response = await fetch("https://api.apilayer.com/fixer/latest", requestOptions)
    // .then(response => response.json())
    // .then(result => {
    //   const rates = result.rates
    //   const exchangeRate = rates[toCurrency] / rates[fromCurrency]
    //   console.log(exchangeRate)
    // })
    // .catch(error => console.log('error', error));

    response = await response.json()
    const rates = response.rates
    const exchangeRate = rates[toCurrency] / rates[fromCurrency]

    if(isNaN(exchangeRate)) {
      throw new Error (`Unable to get currency ${fromCurrency} and ${toCurrency}`)
    }
    
    return exchangeRate
}

// 2nd function - getCountries
export const getCountries = async (toCurrency) => {
  try {
    let response = await fetch(`https://restcountries.com/v3.1/currency/${toCurrency}`)
    response = await response.json()
    return response.map((country) => country.name.official)
  } catch(error) {
    throw new Error(`Unable to get currencies that use ${toCurrency}`)
  }
}

// 3rd function - convertCurrency
export const convertCurrency = async (fromCurrency, toCurrency, amount) => {
  const exchangeRate = await getExchangeRate(fromCurrency, toCurrency)
  const convertedAmount = (amount * exchangeRate).toFixed(2)
  const countries = await getCountries(toCurrency)
  
  return `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spent these in the following countries: ${countries}`
}