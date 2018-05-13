import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import axios from "axios";
import Button from '../../src/routes/Todo/components/Button'
// import data from '../../public/todolist'
import Child from './Child'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      // u:data,
      // showReply: false
    }
  }
  shouldComponentUpdate () {
    return true
  }
  onClick=(e)=>{
    // e.preventDefult();
    // this.setState({showReply: !this.state.showReply})
  }

  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }
  render() {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
         <a href="#" onClick={this.onClick}>הצג</a>
         {/* {this.state.showReply ?<Button SendData={this.state.u}/>  :"" } */}
         <h4 dir="rtl">מספר המשימות הקיימות:</h4>
         {/* <span>{this.state.u.length}</span> */}
         <br/>
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