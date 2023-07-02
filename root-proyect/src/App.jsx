import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function App() {

  return (
    <>
      <Header />

      <ItemListContainer saludo='Bienvenido a React' />
      <Button variant="dark">CLICK ME</Button>
    </>
  )
}

export default App
