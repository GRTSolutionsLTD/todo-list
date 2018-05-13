import React from 'react'
import PropTypes from 'prop-types'
import data from '../../../../public/TodoList.json';

class Button extends React.Component {
    constructor(props) {
        super(props)
      }
    //   onClickDelete=(e)=>{
    //     alert(e.task)
    //   }
    onClickDelete(e)
    {
        alert(e._dispatchInstances._currentElement.key)
    }
    //   onClick={this.onClickDelete}
    render() {
        return (
            <div>
                <div style={{ margin: '0 auto' }} >
                    <h2>List to do</h2>
                    <table className="table table-hover">
                        <tr><th>משימה</th><th>בוצע</th><th>תאריך התחלה</th><th>תאריך סיום</th><th>הערה</th></tr>
                        {
                            // this.props.SendData.map((movie,i)=> (
                            //  <tr ><td>{movie.task}</td> <td><input type="checkbox"  />{movie.Done} </td><td> {movie.dateF}</td>  <td>  {movie.dateL} </td> <td> {movie.note} </td><td><a  href="#" >עדכן</a> {' |'}  <a key={i} href="#" onClick={this.onClickDelete.bind(movie)}>מחק</a></td></tr>
                            // ))
                        }
                    </table>
                </div>
                {/* <input type="text" value={this.props.SendData[0].task} /> */}
            </div>
        )
    }
}
export default Button