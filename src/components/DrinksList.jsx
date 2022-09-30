import useDrinks from "../hooks/useDrinks"
import { Row } from "react-bootstrap";
import Drink from "./Drink";

const DrinksList = () => {
  const { drinks } = useDrinks();
  return (
    <Row className="mt-5">
        {drinks.map(item => (
          <Drink
            key={item.idDrink}
            drink={item}
          />

        ))}
    </Row>
  )
}

export default DrinksList