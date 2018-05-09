import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../../public/TodoList.json';

export const Todo = ({ todo, increment2, add }) => (
    <div style={{ height: '100%' }}>
    {/* <Router history={browserHistory} children={this.props.routes} /> */}
    <div style={{ margin: '0 auto' }} >
  <h2>List to do</h2>
  <table class="table table-hover">
    <tr><th>משימה</th><th>בוצע</th><th>תאריך התחלה</th><th>תאריך סיום</th><th>הערה</th></tr>
      {
          data.map(function (movie) {
              return <tr><td>{movie.task}</td> <td><input type="checkbox" onChange={add}/>{movie.Done} </td><td> {movie.dateF}</td>  <td>  {movie.dateL} </td> <td> {movie.note} </td></tr>;
          })
      }
  </table>
  </div>
  <input type="button" value="הוסף"/>
  <input type="button" value=""/>
  <input type="button" value=""/>


  </div>
  
)
Todo.propTypes = {
  Todo: PropTypes.number.isRequired,
  increment2: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
}

export default Todo