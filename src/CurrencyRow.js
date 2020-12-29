import styled from 'styled-components'

const Wraper = styled.div`
  width: 100%;
  height: 65px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  height: 100%;
  width: 275px;
  margin-right: .35rem;
  font-size: 1.5rem;
  color: #34495e;
  outline: none;
  border: 1px solid #2c3e50;
  border-radius: 7px;
  padding: .35rem;
`

const Select = styled.select`
  height: 100%;
  width: 85px;
  border: 1px solid #2c3e50;
  font-size: 1.5rem;
  color: #34495e;
  border-radius: 7px;
  outline: none;
  background-color: #fff;
  border-bottom: 1px solid #34495e;
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