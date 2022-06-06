export const checkStatus = () => {
  return {
    type: 'categories/checkStatus'
  }
}

const initialState = []
const categoriesReducer = (categories = initialState, action) => {
  switch(action.type) {
    case 'categories/checkStatus':
      return 'Under Construction'
    default:
      return categories
  }
}

export default categoriesReducer
