import { INCREMENT_BY_ONE, ORDER_PLACED } from './actions'

const initialState = {
  totalCount: parseInt(localStorage[('amountOfPizzas')]) || 0,
}

export const mainReducer = (state = initialState, action) => {
  if (action.type === INCREMENT_BY_ONE) {
    const tot = state.totalCount + 1
    localStorage.setItem('amountOfPizzas', tot)
    return { ...state, totalCount: tot }
  } else if (action.type === ORDER_PLACED) {
    localStorage.removeItem('pizzas')
    localStorage.removeItem('amountOfPizzas')
    return { ...state, totalCount: 0 }
  }

  return { ...state }
}
