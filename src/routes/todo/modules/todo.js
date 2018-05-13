import data from '../../../../public/todolist.json';

export const DELETE = 'DELETE'
export const ADD = 'ADD'
export const UPDATE = 'UPDATE'
export const SHOW = 'SHOW'

// Actions
export function Add (value) {
    alert("Add")
    return {
      type    : ADD,
      payload : value
    }
  }
// export const Add = () => {
//     alert("Add")
//     return (dispatch, getState) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 dispatch({
//                     type: ADD,
//                     payload:
//                         {
//                             "task": "Racheli",
//                             "done": false,
//                             "datef": "Wed Apr 27 1988 07:25:08 GMT+0300 (Eastern Europe Daylight Time)",
//                             "datel": "Fri Jun 06 2014 11:43:28 GMT+0300 (Eastern Europe Daylight Time)",
//                             "notes": "Cute"
//                         }

//                 })
//                 resolve()
//             }, 200)
//         })
//     }
// }

export const Delete = () => {
    alert("Delete")
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: DELETE,
                    payload:   
                    {
                        "task": "Jessica",
                        "done": false,
                        "datef": "Wed Apr 27 1988 07:25:08 GMT+0300 (Eastern Europe Daylight Time)",
                        "datel": "Fri Jun 06 2014 11:43:28 GMT+0300 (Eastern Europe Daylight Time)",
                        "notes": "Romero"
                      }
                })
                resolve()
            }, 200)
        })
    }
}

export const Update = () => {
    alert("Update")
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: UPDATE,
                    payload: {
                        "task": "J",
                        "done": false,
                        "datef": "Wed Apr 27 1988 07:25:08 GMT+0300 (Eastern Europe Daylight Time)",
                        "datel": "Fri Jun 06 2014 11:43:28 GMT+0300 (Eastern Europe Daylight Time)",
                        "notes": "Romero"
                      }
                })
                resolve()
            }, 200)
        })
    }
}
export const Show = () => {
    alert("Show")
    return (dispatch, getState) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch({
                    type: SHOW,
                    payload: state
                })
                resolve()
            }, 200)
        })
    }
}

export const actions = {
    Delete,
    Add,
    Update,
    Show
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [DELETE]: (state, action) => (alert(state.indexOf(action.payload)),state.remove(action.payload),alert(state),state.filter(i=>i!=action.payload),alert(state)),
    [ADD]: (state, action) => (state.push(action.payload),alert(state)),
    [UPDATE]: (state, action) => state,
    [SHOW]: (state, action) => state,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = data
export default function TodoReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
