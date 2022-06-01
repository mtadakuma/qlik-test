import React, { useState } from 'react'
import empanada from './empanadas.png';
import burger from './burger.png';
import pizza from './pizza.png';
import teque from './teque.png';
import './Foods.css'

const Foods = () => {

  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleClick = ({ name }) => {
        if (selectedFoods.length === 0) {
            setSelectedFoods([...selectedFoods, name])
        } else {
            let index = selectedFoods.indexOf(name)
            if (index > -1) {
            setSelectedFoods(selectedFoods.filter((food) => food !== name))
            } else {
            setSelectedFoods([ ...selectedFoods, name]);
            }
        }
    }

  const foodsList = [
    {
        id: 1,
        name: 'Empanadas',
        imgURL: empanada
    },
    {
        id: 2,
        name: 'Hamburguesas',
        imgURL: burger
    },
    {
        id: 3,
        name: 'Pizzas',
        imgURL: pizza
    },
    {
        id: 4,
        name: 'Tequeños',
        imgURL: teque
    }
    ];



  return (
    <>

      <div className='foods-list-container'>
        {foodsList.map((food) =>
            <div className={(selectedFoods.indexOf(food.name) > -1 ? 'active-food-card food-card' : 'food-card')} key={food.id} onClick={() => handleClick(food)}>
            <h6 className='food-title'>{food.name}</h6>
            <img src={food.imgURL} alt={food.name} className='food-img'/>
            </div>
        )}
      </div>

      <div className="iframe-container">
        <div>
          <iframe
          src={`http://localhost:4848/single/?appid=C%3A%5CUsers%5Cmt250056%5COneDrive%20-%20Teradata%5CDocuments%5CQlik%5CSense%5CApps%5CRestaurante.qvf&obj=RUWjaS&opt=ctxmenu,currsel&select=$::NOMBRE_COMIDA,${selectedFoods}`}
          title='foods'
          className='iframe-foods' >
          </iframe>
        </div>
      </div>
    </>
    
  )
}

export default Foods