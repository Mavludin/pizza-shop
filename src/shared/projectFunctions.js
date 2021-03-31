import { useEffect } from 'react'

export const addToCart = (item, pos) => {
  let tempArray
  if (localStorage['pizzas']) {
    tempArray = JSON.parse(localStorage['pizzas'])
    if (tempArray[pos]) tempArray[pos].amount += 1
    else tempArray[pos] = { ...item, amount: 1 }
  } else {
    tempArray = []
    const pizza = { ...item, amount: 1 }
    tempArray[pos] = pizza
  }

  localStorage.setItem('pizzas', JSON.stringify(tempArray))
}

export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title
  }, [title])
}
