import { Container } from 'react-bootstrap';
import { CategoryProvider } from './context/CategoryProvider';
import { DrinksProvider } from './context/DrinksProvider';
import Formulario from './components/Formulario';
import DrinksList from './components/DrinksList';
import ModalDrink from './components/ModalDrink';
function App() {
  

  return (
    <CategoryProvider>
       <DrinksProvider>
        
            <header className="py-5">
                <h1>Buscador de Bebidas</h1>
            </header>

            <Container className='mt-5'>
              <Formulario/>
              <DrinksList/>
              <ModalDrink/>
            </Container>

       </DrinksProvider>
    </CategoryProvider>
  )
}

export default App
