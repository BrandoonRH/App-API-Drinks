import { useState } from 'react';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';
import useCategory from '../hooks/useCategory';
import useDrinks from '../hooks/useDrinks';
const Formulario = () => {

    const { categories } = useCategory();
    const {consultDrink} = useDrinks(); 

    const [busqueda, setBusqueda] = useState({
        name: '',
        category: ''
    })
    const [alert, setAlert] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlert('Todos los Campos son Obligatorios'); 
            return
        }
        setAlert('')
        consultDrink(busqueda)

    }
  return (
    <Form onSubmit={handleSubmit}>

        {alert &&
         <Alert variant='danger'>
            {alert}
        </Alert>
        }
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='name'>Nombre Bebida</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Tequila, Vodka, etc" name="name" value={busqueda.name}
                     onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name] : e.target.value 
                    })}
                     />
                </Form.Group>
            </Col>  
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor='category'>Categoría Bebida</Form.Label>
                    <Form.Select
                        id="category"
                        name="category"
                        value={busqueda.category}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value 
                        })}
                    >
                        <option value="">-- Seleccione Categoria --</option>
                        {categories.map(category => (
                            <option 
                                value={category.strCategory}
                                key={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}

                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
        <Row className='justify-content-end'>
              <Col md={3}>
                <Button 
                    variant='danger'
                    className='text-uppercase w-100'
                    type='submit'
                >
                    Buscar Bebidas
                </Button>
              </Col>                  
        </Row>

    </Form>
  )
}

export default Formulario