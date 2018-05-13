import React from 'react'
import PropTypes from 'prop-types'
// import data from '../../../../public/TodoList.json';

export const Todo = ({ todo, Delete, add }) => (
  <div style={{ height: '100%' }}>
    {/* <Router history={browserHistory} children={this.props.routes} /> */}
    <div style={{ margin: '0 auto' }} >
      <h2>List to do</h2>
      <table className="table table-hover">
        <tr><th>משימה</th><th>בוצע</th><th>תאריך התחלה</th><th>תאריך סיום</th><th>הערה</th></tr>
        {
          todo.map(function (movie) {
          return <tr><td>{movie.task}</td> <td><input type="checkbox" />{movie.Done} </td><td> {movie.dateF}</td>  <td>  {movie.dateL} </td> <td> {movie.note} </td><td><input type="button" value="עדכן" /> {' '}  <input type="button" value="מחק" onClick={Delete}  /></td></tr>;
        })
        }
      </table>
    </div>
    <br />
    {/* how to add commponent to const and what diffrent beetwin class to const */}
    {/* <Button SendData={this.u}/> */}
    <input type="button" value="הוסף" onClick={add} /> {' '}
    <input type="button" value="הצג" />
  </div>
)
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  Delete: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
}

export default Todo