import styled from 'styled-components'

const StyledPopUp = styled.div`
  position: absolute;
  z-index: 10;
  color: white;
  background-color: #393939;
  border-radius: 10px;
  padding: 10px;
  width: max-content;
  z-index: 100;
  right: 25%;
  top: 67px;
  display: none;
`

export const ProductAdded = ({ addedPizza, pizzaFlag }) => {
  return (
    <StyledPopUp pizzaFlag={pizzaFlag}>
      Added: {addedPizza}
      <p></p>
    </StyledPopUp>
  )
}
