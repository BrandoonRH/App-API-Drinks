import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [drinkRecipe, setDrinkRecipe] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
            const getDrinkRecipe = async () => {
                if(!drinkId) return

                try {
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
                    const {data} = await axios(url)
                    setDrinkRecipe(data.drinks[0])
                } catch (error) {
                    console.log(error)
                } finally {
                    setCargando(false)
                }
            }
            
            getDrinkRecipe(); 
    }, drinkId)


    const consultDrink = async dataApi => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${dataApi.name}&c=${dataApi.category}`
            const {data} = await axios(url)
            setDrinks(data.drinks) 
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalSet = () =>{
            setModal(!modal)
    }

    const handleDrinkIdClick = id =>{
        setDrinkId(id)
    }
    
    return (
        <DrinksContext.Provider
            value={{
                consultDrink,
                drinks,
                handleModalSet,
                modal,
                handleDrinkIdClick,
                drinkRecipe,
                cargando
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export{
    DrinksProvider
}

export default DrinksContext