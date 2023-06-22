
import './App.css'
import Form from './Components/Form/Form'

function App() {

  return (
    <div>
      {/* Navber Section */}
      <div className="navbar bg-primary text-primary-content">
        <a className=" normal-case text-3xl text-center">Task SKids</a>
      </div>
      {/* form section */}
         <Form></Form>
    </div>
  )
}

export default App
