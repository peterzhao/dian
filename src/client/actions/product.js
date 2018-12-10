export const types = {
  TOGGLE_LIKE: 'TOGGLE_LIKE'
}

export const toggleLiked = index => {
  return { type: types.TOGGLE_LIKE, payload: index}
}