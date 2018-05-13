import React from 'react'
import PropTypes from 'prop-types'
import Pop from '../../Pop/components/Pop'
import { O_DIRECTORY } from 'constants';
import Button from '../components/Button'
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// class Todo extends React.Component({ todo, Delete, Add }) {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data1: data,
//       currentRow: 0,
//       showReply: false,
//       a: 1,
//       done: false

//     }
//   }
//   shouldComponentUpdate() {
//     return true
//   }
//   OnChange = (e) => {
//     var i = e.target.checked;
//     data[e._dispatchInstances._currentElement.key].done = true;
//     alert(i);
//     if (i) {
//       alert("yes");
//     }
//     else {
//       alert("no");
//     }
//   }
//   handleClick(evt) {
//     alert("pop");
//     this.setState({ currentRow: evt });
//     // this.child.method() // do stuff
//   }
//   onClick = () => {
//     this.child.method() // do stuff
//   }
//   onClick1(e) {
//     // this.setState({currentRow: evt});
//     // alert(currentRow);
//     this.setState({ currentRow: e._dispatchInstances._currentElement.key });
//     e.preventDefault();
//     // שהשורה הזאת תעשה רק פעם אחת
//     if (this.state.a == 1) {
//       this.setState({ showReply: !this.state.showReply })
//       this.setState({ a: 2 })
//     }
//   }
//   save = (e) => {
//     e.preventDefault()
//     this.setState({
//       showReply: false
//     })
//   }

//   render() {
//     return (
//       <div style={{ height: '100%' }}>
//         <Router history={browserHistory} children={this.props.routes} />
//         <div style={{ margin: '0 auto' }}>
//           <h2>list todo</h2>
//           <table className="table">
//             <tr>
//               <th>task</th>
//               <th>done</th>
//               <th>date-start</th>
//               <th>date-finish</th>
//               <th>notes</th>
//             </tr>
//             {data.map((movie, i) =>
//               (movie.done ? <tr key={i} onClick={this.onClick1.bind(this)} ><td>{movie.task}</td><input type="checkbox" onChange={this.OnChange.bind(this)} checked={movie.done} />
//                 <td>{movie.datel}</td><td>{movie.datef}</td><td>{movie.notes}</td></tr> : ""))}
//           </table>
//           <table className="table table-striped" >
//             <tr>
//               <th>task</th>
//               <th>done</th>
//               <th>date-start</th>
//               <th>date-finish</th>
//               <th>notes</th>
//             </tr>
//             {data.map((movie, i) =>
//               (!movie.done ? <tr><td>{movie.task}</td><input type="checkbox" checked={movie.done} onChange={this.OnChange.bind(this)} />
//                 <td>{movie.datel}</td><td>{movie.datef}</td><td>{movie.notes}</td></tr> : ""))}
//           </table>
//           {this.state.showReply && <Pop myNumber={this.state.data1} index={this.state.currentRow} save={this.save} />}
//         </div>
//         <a href="#" onClick={this.onClick}>הצג</a>
//         {this.state.showReply ? <Button SendData={this.state.u} /> : ""}
//         <h4 dir="rtl">מספר המשימות הקיימות:</h4>
//         <span>{this.state.u.length}</span>
//         <br />
//       </div>
//     )
//   }
export const Todo = ({ todo, Delete, Add, Update, Show }) => (
  <div style = {{ height: '100%' }}>
    {/* <Router history={browserHistory} children={this.props.routes} /> */ }
    < div style = {{ margin: '0 auto' }} >
      <h2>List to do</h2>
      <table className="table table-hover">
        <tr><th>משימה</th><th>בוצע</th><th>תאריך התחלה</th><th>תאריך סיום</th><th>הערה</th></tr>
        {
          todo.map(function (movie) {
            return <tr><td>{movie.task}</td> <td><input type="checkbox" />{movie.Done} </td><td> {movie.datef}</td>  <td>  {movie.datel} </td> <td> {movie.notes} </td><td><input type="button" value="מחק" onClick={Delete} />
              <input type="button" value="עדכן" onClick={Update} /> </td></tr>;
          })
        }
      </table>
      <div style={{ margin: '0 auto' }}>
        <h2>list todo</h2>
        <table className="table">
          <tr>
            <th>task</th>
            <th>done</th>
            <th>date-start</th>
            <th>date-finish</th>
            <th>notes</th>
          </tr>
          {todo.map((movie, i) =>
            (movie.done ? <tr /*key={i} onClick={this.onClick1.bind(this)}*/ ><td>{movie.task}</td><input type="checkbox" /*onChange={this.OnChange.bind(this)}*/ checked={movie.done} />
              <td>{movie.datel}</td><td>{movie.datef}</td><td>{movie.notes}</td></tr> : ""))}
        </table>
        <table className="table table-striped" >
          <tr>
            <th>task</th>
            <th>done</th>
            <th>date-start</th>
            <th>date-finish</th>
            <th>notes</th>
          </tr>
          {
            todo.map((movie, i) =>
            (!movie.done ? <tr><td>{movie.task}</td><input type="checkbox" checked={movie.done} /*onChange={this.OnChange.bind(this)}*/ />
              <td>{movie.datel}</td><td>{movie.datef}</td><td>{movie.notes}</td></tr> : ""))}
        </table>
        <Pop myNumber={todo} index={1} />
        {/*this.state.showReply && <Pop /*myNumber={this.state.data1} index={this.state.currentRow} save={this.save} />*/}
      </div>
    </div >
  <input type="button" value="הוסף" onClick={Add} />
  </div >

)
// }
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  Delete: PropTypes.func.isRequired,
  Add: PropTypes.func.isRequired,
  Update: PropTypes.func.isRequired,
  Show: PropTypes.func.isRequired,
}

export default Todo
