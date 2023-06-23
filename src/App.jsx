
import './App.css'
import Form from './Components/Form/Form'
import Table from './Components/Table/Table'

function App() {

  return (
    <div>
      {/* Navber Section */}
      <div className="navbar bg-primary text-primary-content">
        <a className=" normal-case text-3xl text-center">Task SKids</a>
      </div>
      {/* form section */}
         <Form></Form>
         {/* Table */}
         <Table></Table>
    </div>
  )
}

export default App
