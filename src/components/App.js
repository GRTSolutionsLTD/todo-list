import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import data from '../../public/todolist'



class RemoteStoreAlternative extends React.Component {
  constructor(props) {
    super(props);
    this.products = getProducts();
    this.state = {
      data: this.products
    };
  }

  onCellEdit = (row, fieldName, value) => {
    const { data } = this.state;
    let rowIdx;
    const targetRow = data.find((prod, i) => {
      if (prod.id === row.id) {
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
      this.setState({ data });
    }
  }

  onAddRow = (row) => {
    this.products.push(row);
    this.setState({
      data: this.products
    });
  }

  onDeleteRow = (row) => {
    this.products = this.products.filter((product) => {
      return product.id !== row[0];
    });

    this.setState({
      data: this.products
    });
  }

  render() {
    return (
      <RemoteAlternative
        onCellEdit={ this.onCellEdit }
        onAddRow={ this.onAddRow }
        onDeleteRow={ this.onDeleteRow }
        { ...this.state } />
    );
  }
}


class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }


  render() {


    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />

          <div style={{ margin: '0 auto' }}>
            {/* <h2>list todo</h2>
           <table>
             <tr>
             <th>task</th>
             <th>done</th>
            <th>date-start</th>
            <th>date-finish</th>
            <th>notes</th> 
          
            </tr>
         
          {
            data.map(function(d){
             return (<tr>T<td>{d.task}</td><input type="checkbox"/> 
             <td>{d.datel}</td><td>{d.datef}</td><td>{d.notes}</td></tr>)
          })
        } */}
            {/* </table> */}
            <BootstrapTable data={data} striped hover
              remote={true}
              checkboxRow={true}
              selectRow={{ mode: 'checkbox' }}
              options={{ oncheckRow: this.props.oncheckRow }}>
              <TableHeaderColumn isKey dataField='task'>task</TableHeaderColumn>
              <TableHeaderColumn dataField='datef'>date-start</TableHeaderColumn>
              <TableHeaderColumn dataField='datel'>date-finish</TableHeaderColumn>
              <TableHeaderColumn dataField='notes'>notes</TableHeaderColumn>
            </BootstrapTable>,

          </div>
        </div>
      </Provider>
    )
  }
}

export default App
