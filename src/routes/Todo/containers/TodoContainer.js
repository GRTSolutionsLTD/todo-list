import { connect } from 'react-redux'
import { Delete, Add,Update,Show } from '../modules/todo'
import Todo from '../components/Todo'


const mapDispatchToProps = {
  Delete ,
  Add: () => Add(null),
  Update,
  Show
}

const mapStateToProps = (state) => ({
  todo : state.todo
})



export default connect(mapStateToProps, mapDispatchToProps)(Todo)
