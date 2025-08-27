
import './App.css'
import ColorPicker from './components/ColorPicker'
import Increase from './components/increase'
import InputRadio from './components/InputRadio'
import InputText from './components/InputText'
import LoginForm from './components/LoginForm'
import TodoApp from './components/TodoApp'
import UserList from './components/UserList'

function App() {

  return (
    <div>
      <Increase></Increase>
      <UserList></UserList>
      <LoginForm></LoginForm>
      <ColorPicker></ColorPicker>
      <InputText></InputText>
      <InputRadio></InputRadio>
      <TodoApp></TodoApp>
    </div>
  )
}

export default App
