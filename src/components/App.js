import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import axios from "axios";
import Button from '../../src/routes/Todo/components/Button'
import data from '../../public/TodoList.json';
import ReplyForm from './Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      u:data,
      showReply: false
    }
  }
  onClick=(e)=>{
    // e.preventDefult();
    this.setState({showReply: !this.state.showReply})
  }
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return true
   // return false
  }

  render() {

    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
         <a href="#" onClick={this.onClick}>הצג</a>
         {this.state.showReply ?<Button SendData={this.state.u}/>  :"" }
         <h4 dir="rtl">מספר המשימות הקיימות:</h4>
         <span>{this.state.u.length}</span>
         <br/>
        </div>
      </Provider>
    )
  }
}
export default App
