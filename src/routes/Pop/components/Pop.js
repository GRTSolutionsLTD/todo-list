import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Pop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      updatable: false,
      name: props.name,
      status: props.status,
      text:""
    }
  }
  onTodoChange(value){
    this.setState({
         name: value
    });
}
    method() {
        window.alert('do stuff222');
        document.getElementById("s").innerText="do stuff222"
      }
    render() {
        return (
           <div>

          {/* <AvForm>   
          task:   
        <input type="text"  value={this.props.myNumber[this.props.index].task} />
        <br/>
        datef:
        <input type="text"  value={this.props.myNumber[this.props.index].task} />
        <br/>
        datel:
        <input type="text"  value={this.props.myNumber[this.props.index].task} />
        <br/>
        notes:
        <input type="text"  value={this.props.myNumber[this.props.index].task} />
        <br/>
        <Button color="primary">שמור</Button>
        </AvForm> */}
       <form className="form-horizontal" display="none">
            <fieldset>
              <legend>details:</legend>
              <div className="form-group">
                <label htmlFor="select" className="col-lg-2 control-label">task:</label>
                <div className="col-lg-10">
                <input className="form-control" id="messageType" value={this.props.myNumber[this.props.index].task} type="text" onChange={this.handleChange}/>
                </div>
              </div>
            <div className="form-group">
              <label htmlFor="select" className="col-lg-2 control-label">date-first:</label>
              <div className="col-lg-10">
                <input className="form-control" id="messageType" value={this.props.myNumber[this.props.index].datef} type="text" onChange={this.handleChange}/>
              </div>
              
            </div>
            <div className="form-group">
              <label htmlFor="select" className="col-lg-2 control-label">date-last:</label>
              <div className="col-lg-10">
              <input className="form-control" id="messageType" value={this.props.myNumber[this.props.index].datel} type="text" onChange={this.handleChange}/>
              </div>
              </div>  
              <div className="form-group">
              <label htmlFor="select" className="col-lg-2 control-label">notes:</label>
              <div className="col-lg-10">
              <input className="form-control" id="messageType" value={this.props.myNumber[this.props.index].notes} type="text" onChange={this.handleChange}/>
              </div>
              
            </div>
            {/* <input type="text" value="trtrt" id={'todoName' + this.props.id} onChange={e => this.onTodoChange(e.target.value)}/>
            <input type="text" value="uiuiuuu" onChange={e => this.setState({ text: e.target.value })}/> */}
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button id="nextButton" type="button" className="btn btn-primary" onClick={this.props.save} >save</button>
              </div>
            </div>
          </fieldset>
        </form> 
           </div>
        );
     }
  }  
export default (Pop)