import Navbar from  './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={`BIENVENIDOS A NUESTRO E-COMMERCE !! EL SITIO SE ENCUENTRA EN CONSTRUCCIÓN`}/>
    </div>
  )
}

export default App
