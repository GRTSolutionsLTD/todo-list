import { connect } from 'react-redux'
import { Delete, add } from '../modules/todo'
import Todo from '../components/Todo'


const mapDispatchToProps = {
  Delete ,
  add
}

const mapStateToProps = (state) => ({
  todo : state.todo
})



export default connect(mapStateToProps, mapDispatchToProps)(Todo)
