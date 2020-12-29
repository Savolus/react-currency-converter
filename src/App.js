import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CurrencyRow from './CurrencyRow'

const Wraper = styled.div`
  width: 400px;
  height: 250px;
  text-align: center;
  border-radius: 20px;
  background-color: #ecf0f1;
  box-shadow: 25px 15px 3px #bdc3c7;
`

const Text = styled.span`
  font-size: 3rem;
  color: #34495e;
`

const Header = styled(Text)`
  font-weight: 700;
  padding: 10px 0;
`

const API_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOption, setCurrencyOption] = useState([])
  const [currencyFrom, setCurrencyFrom] = useState()
  const [currencyTo, setCurrencyTo] = useState()
  const [exchangeRate, setExcahngeRate] = useState(1)
  const [amountState, setAmountState] = useState(true)
  const [amount, setAmount] = useState(1)

  let amountTo, amountFrom

  if (amountState) {
    amountFrom = amount
    amountTo = amount * exchangeRate
  } else {
    amountTo = amount
    amountFrom = amount / exchangeRate
  }

  useEffect(async () => {
    const responce = await fetch(API_URL)
    const data = await responce.json()

    const currencies = Object.keys(data.rates)
    const firstCurrency = currencies[0]

    setCurrencyOption([data.base, ...currencies])
    setCurrencyFrom(data.base)
    setCurrencyTo(firstCurrency)
    setExcahngeRate(data.rates[firstCurrency])
  }, [])

  useEffect(async () => {
    if (currencyFrom && currencyTo) {
      const FETCH_URL = `${API_URL}?base=${currencyFrom}&symbols=${currencyTo}`
      const responce = await fetch(FETCH_URL)
      const data = await responce.json()
  
      setExcahngeRate(data.rates[currencyTo])
    }
  }, [currencyFrom, currencyTo])

  const handleAmountFrom = event => {
    setAmount(event.target.value)
    setAmountState(true)
  }

  const handleAmountTo = event => {
    setAmount(event.target.value)
    setAmountState(false)
  }

  return (
    <Wraper>
      <Header>
        Convert
      </Header>
      <CurrencyRow 
        currencyOption={currencyOption}
        selectedCurrency={currencyFrom}
        changeCurrency={
          event => setCurrencyFrom(event.target.value)
        }
        amount={amountFrom}
        changeAmount={handleAmountFrom}
      />
      <Text>
        =
      </Text>
      <CurrencyRow
        currencyOption={currencyOption}
        selectedCurrency={currencyTo}
        changeCurrency={
          event => setCurrencyTo(event.target.value)
        }
        amount={amountTo}
        changeAmount={handleAmountTo}
      />
    </Wraper>
  )
}

export default App;