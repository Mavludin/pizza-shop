import { INCREMENT_BY_ONE, ORDER_PLACED } from './actions'

const initialState = {
  totalCount: 0 || parseInt(localStorage[('amountOfPizzas')]),
}

export const mainReducer = (state = initialState, action) => {
  if (action.type === INCREMENT_BY_ONE) {
    if (localStorage[('amountOfPizzas')]) 
    localStorage.setItem('amountOfPizzas', state.totalCount + 1)
    else localStorage.setItem('amountOfPizzas', 1)
    return { ...state, totalCount: state.totalCount + 1 }
  } else if (action.type === ORDER_PLACED) {
    localStorage.removeItem('pizzas')
    localStorage.removeItem('amountOfPizzas')
    return { ...state, totalCount: 0 }
  }

  return { ...state }
}
