import {useMyContext } from "./Context"
import { Nav } from "./components/Nav";
import { Sidebar } from "./components/Sidebar";


function App() {

  const {num} = useMyContext()

  console.log(num);
  
  return (
    <div className="flex">
      <Sidebar/>
      <Nav/>
    </div>
  )
}

export default App
