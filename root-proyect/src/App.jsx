import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <>
      <Header />

      <ItemListContainer saludo='Bienvenido a React'/>
      
      
    </>
  )
}

export default App
