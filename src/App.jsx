import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchTodos } from './redux/slice/todo'


function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>
  }

  return (  
    <>
      <button type="button" onClick={() => dispatch(fetchTodos())}>Fetch Todos</button>
      {
        state.todo.data?.map(((e) => <li>{e.title}</li>))
      }
    </>
  )
}

export default App

