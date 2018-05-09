export const COUNTER_INCREMENT2 = 'COUNTER_INCREMENT'
export const ADD = 'ADD'
// Actions
export function increment2 (value = 1) {
  return {
    type    : COUNTER_INCREMENT2,
    payload : value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const add = () => {
  alert("checked")
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : ADD,
          payload : getState().todo
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment2,
  add
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT2]    : (state, action) => state + action.payload,
  [ADD] : (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
