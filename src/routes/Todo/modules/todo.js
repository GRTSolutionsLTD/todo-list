import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import data from '../TodoList.json'

export const ADD = 'ADD'
export const DELETE = 'DELETE'
export const UPDATE = 'UPDATE'
export const SHOW = 'SHOW'

// Actions
export const Delete = () => {
  alert("Delete")
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: DELETE,
          payload: {
            "task": "Beck",
            "Done": true,
            "dateF": "Tue Mar 09 2004 11:09:34 GMT+0200 (Eastern Europe Standard Time)",
            "dateL": "Tue Sep 16 2014 06:46:05 GMT+0300 (Eastern Europe Daylight Time)",
            "note": "Jefferson"
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
            "task": "B",
            "Done": true,
            "dateF": "Tue Mar 09 2004 11:09:34 GMT+0200 (Eastern Europe Standard Time)",
            "dateL": "Tue Sep 16 2014 06:46:05 GMT+0300 (Eastern Europe Daylight Time)",
            "note": "Jeffersen"
          }
        })
        resolve()
      }, 200)
    })
  }
}
// export const add = (a) => (
//   dispatch => {
//     var list=data;
//     console.log(list)


//     //work only on http requests
//     // return axios.get('../../Todo/TodoList.json')
//     //   .then(res => {
//     //     dispatch({
//     //       type: ADD,
//     //       payload: res.data
//     //     })
//     //   })
//     //   .catch(err => {
//     //     console.log("error");
//     //   });
//   });


// export function add(value) {
//   alert(value.detail)
//   console.log(value.detail)
//   // alert("checked")
//   return {
//     type: ADD,
//     payload: value
//   }
// }

export const add = () => {
  alert("Add")
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: ADD,
          payload: {
            "task": "Rachel",
            "Done": true,
            "dateF": "Tue Mar 08 2008 08:08:08 GMT+0800 (Eastern Europe Standard Time)",
            "dateL": "Tue Sep 88 2088 08:88:08 GMT+0800 (Eastern Europe Daylight Time)",
            "note": "cute"
          }
        })
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  Delete,
  add,
  Update
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const index=0
const ACTION_HANDLERS = {
  // + action.payload
  // removeItem(item) {
  //   this.setState(prevState => {
  //     data: prevState.data.filter(i => i !== item)
  //   });
  // }


  [UPDATE]:(state, action)=>(alert(state)),
  [DELETE]: (state, action) => (
        alert("state:"+state),
        alert("action.payload:"+action.payload),
        alert(state.indexOf(action.payload)),
        state.filter(j=>j!=action.payload)
  ),
  // state.filter(i => i !== action.payload),alert(state)
  //push another element to the list-state
  [ADD]: (state, action) => (state.push(action.payload), alert(state), this.setState({ state: state }))

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = data
export default function todoReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
