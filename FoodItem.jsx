import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../css/Food.css'

const FoodItem = ({ data }) => {
    console.log(data)
    let navigate = useNavigate()
    return (
        <div>
            {
                (!data) ? "NOT FOUND" : data.map(item => {
                    return (
                        <div>
                            <div className="card" key={item.idMeal} onClick={() => { navigate(`/${item.idMeal}`) }}>
                                <img src={item.strMealThumb} className='img' alt="" />
                                <h3>{item.strMeal}</h3>
                            </div><br />
                        </div>
                    )
                })
            }

        </div>
    );
};

export default FoodItem;