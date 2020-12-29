import { useState, useEffect } from 'react'
import styled from 'styled-components'
import CurrencyRow from './CurrencyRow'

const Wraper = styled.div`
  min-width: 400px;
  min-height: 250px;
  text-align: center;
  border-radius: 20px;
  background-color: #ecf0f1;
  box-shadow: 20px 15px 5px #bdc3c7;
  position: relative;
  padding: 10px;
`

const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
`

const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Text = styled.span`
  color: #34495e;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
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

  const handleCurrencyFrom = event => {
    setCurrencyFrom(event.target.value)
  }

  const handleCurrencyTo = event => {
    setCurrencyTo(event.target.value)
  }

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
        <Text>Convert</Text>
      </Header>
      <Content>
        <CurrencyRow 
          currencyOption={currencyOption}
          selectedCurrency={currencyFrom}
          changeCurrency={handleCurrencyFrom}
          changeAmount={handleAmountFrom}
          amount={amountFrom}
        />
        <Text>=</Text>
        <CurrencyRow
          currencyOption={currencyOption}
          selectedCurrency={currencyTo}
          changeCurrency={handleCurrencyTo}
          changeAmount={handleAmountTo}
          amount={amountTo}
        />
      </Content>
    </Wraper>
  )
}

export default App;