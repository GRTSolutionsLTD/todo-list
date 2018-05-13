import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import data from '../../public/todolist'
import Pop from '../routes/Pop/components/Pop'
import Child from './Child'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
   
    this.state = {
      data1: data,
      currentRow:0 ,
      showReply: false , 
       a:1,
       done:false
     
   }
  }
  shouldComponentUpdate() {
    return true
  }
  OnChange = (e) => {
    var i=e.target.checked;
    data[e._dispatchInstances._currentElement.key].done=true;
    alert(i);
    if(i)
    {
      alert("yes");
    }
    else
    {
      alert("no");
    }
  }
  handleClick(evt) {
    alert("pop");  
    this.setState({currentRow: evt});
    // this.child.method() // do stuff
  }
  onClick = () => {
    this.child.method() // do stuff
  }
  onClick1(e){
    // this.setState({currentRow: evt});
    // alert(currentRow);
    this.setState({currentRow: e._dispatchInstances._currentElement.key}); 
      e.preventDefault();
      // שהשורה הזאת תעשה רק פעם אחת
      if(this.state.a==1)
      {
      this.setState({showReply: !this.state.showReply})
      this.setState({a:2})
      }
    }
    save = (e)=> {
      e.preventDefault()
      this.setState({
        showReply: false
      })
    }
  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
          {/* קריאה לקומפוננטה הבן דרך האב */}  
          {/* <Child onRef={ref => (this.child = ref)} />
          <input type="button" value="adadsf" onClick={this.onClick}/> */}
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
               {data.map((movie,i)=> 
           ( movie.done ? <tr  key={i} onClick={this.onClick1.bind(this)} ><td>{movie.task}</td><input type="checkbox" onChange={this.OnChange.bind(this)} checked={movie.done}/>
            <td>{movie.datel}</td><td>{movie.datef}</td><td>{movie.notes}</td></tr>:""))}                     
            </table> 
              <table className="table table-striped" >
              <tr>
                <th>task</th>
                <th>done</th>
                <th>date-start</th>
                <th>date-finish</th>
                <th>notes</th>
              </tr>
             { data.map((movie ,i)=>
              ( !movie.done ? <tr><td>{movie.task}</td><input type="checkbox" checked={movie.done} onChange={this.OnChange.bind(this)} />
                 <td>{movie.datel}</td><td>{movie.datef}</td><td>{movie.notes}</td></tr>:"" ))}
              </table>        
              {this.state.showReply && <Pop myNumber = {this.state.data1} index={this.state.currentRow} save = {this.save}/> }
          </div>
        </div>
      </Provider>
    )
  }
}

// {/* { <BootstrapTable data={data} striped hover
//               remote={true}
//               checkboxRow={true}
//               selectRow={{ mode: 'checkbox' }}
//               options={{ oncheckRow:this.handleChange}}>
//               <TableHeaderColumn isKey dataField='task' tdStyle={ { whiteSpace: 'normal' } }>task</TableHeaderColumn>
//               <TableHeaderColumn dataField='datef' tdStyle={ { whiteSpace: 'normal' } }>date-start</TableHeaderColumn>
//               <TableHeaderColumn dataField='datel'thStyle={ { 'fontWeight': 'lighter' } }>date-finish</TableHeaderColumn>
//               <TableHeaderColumn dataField='notes' thStyle={ { 'fontWeight': 'lighter' } }>notes</TableHeaderColumn>
//             </BootstrapTable>, }
//      */}
export default App;