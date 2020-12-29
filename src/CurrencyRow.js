import styled from 'styled-components'

const Wraper = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  height: 100%;
  width: 100%;
  margin-right: .25rem;
  font-size: 1.5rem;
  color: #34495e;
  outline: none;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  padding: .25rem;
`

const Select = styled.select`
  height: 100%;
  width: 25%;
  border: 1px solid #2c3e50;
  font-size: 1.5rem;
  color: #34495e;
  border-radius: 4px;
  outline: none;
  background-color: #fff;
`

function CurrencyRow(props) {
  const {
    currencyOption,
    selectedCurrency,
    changeCurrency,
    changeAmount,
    amount
  } = props

  return (
    <Wraper>
      <Input type='number' value={amount} onChange={changeAmount} />
      <Select value={selectedCurrency} onChange={changeCurrency} >
        {
          currencyOption.map(option => {
            return (
              <option key={option} value={option}>
                { option }
              </option>
            )
          })
        }
      </Select>
    </Wraper>
  )
}

export default CurrencyRow