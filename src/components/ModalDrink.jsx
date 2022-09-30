import { Modal, Image } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"
import Spinner from "./Spinner";
const ModalDrink = () => {
    const {modal, handleModalSet, drinkRecipe, cargando}= useDrinks();
   
    const showIngrdients = () => {
      let ingredients = []; 
      for(let i = 1; i < 16; i++){
          if(drinkRecipe[`strIngredient$[i]`]){
            ingredients.push(
              <li>
                {drinkRecipe[`strIngredient${i}`]}
                {drinkRecipe[`strMeasure${i}`]}  
              </li>
            )
          }
      }
    }

  return (
      /*!cargando && (<Modal show={modal} onHide={handleModalSet}>
        <Image
          src={drinkRecipe.strDrinkThumb}
          alt={`Imagen Receta ${drinkRecipe.strDrink}`}
        />
        <Modal.Header>
          <Modal.Title>{drinkRecipe.strDrink}</Modal.Title>
        </Modal.Header>
          <Modal.Body>
                  <div className="p-3">
                      <h2>Instrucciones</h2>
                      {drinkRecipe.strInstructions}
                      <h2>Ingredientes y Cantidad</h2>
                      {showIngrdients()}
                  </div>
          </Modal.Body>
      </Modal>)*/

      <>
          {cargando ? 
          (
            <Spinner/>
          ) : (
            <Modal show={modal} onHide={handleModalSet}>
            <Image
              src={drinkRecipe.strDrinkThumb}
              alt={`Imagen Receta ${drinkRecipe.strDrink}`}
            />
            <Modal.Header>
              <Modal.Title>{drinkRecipe.strDrink}</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                      <div className="p-3">
                          <h2>Instrucciones</h2>
                          {drinkRecipe.strInstructions}
                          <h2>Ingredientes y Cantidad</h2>
                          {showIngrdients()}
                      </div>
              </Modal.Body>
          </Modal>
          )}
      </>
  )
}

export default ModalDrink