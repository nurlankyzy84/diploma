import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import '../css/RecipeInfo.css'
import SecHeader from './SecHeader';
let vId = ""

const RecipeInfo = () => {

    const [item, setItem] = useState()
    const { MealId } = useParams()
    if (MealId != "") {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
            .then(res => res.json())
            .then(data => {
                setItem(data.meals[0])
            })
    }

    if (item) {
        const url = item.strYoutube
        const str = url.split("=")
        vId = str[str.length - 1]
    }

    return (
        <div>
            {
                (!item) ? "" : (<div>
                    <SecHeader /><br />
                    <div className="content">
                        <img src={item.strMealThumb} className='img1' alt='' />

                        <div className="inner-content">
                            <br />
                            <h2>{item.strMeal}</h2>
                            <br />
                            <h2>{item.strArea} Food</h2>
                            <br />
                            <h2>Category: {item.strCategory}</h2>
                        </div>

                    </div>


                    <div className="recipe-details">

                        <div className="details">
                            <h2>Ingredients</h2><br /> <hr />
                            <h4>{item.strIngredient1}  {item.strMeasure1}</h4>
                            <h4>{item.strIngredient2}  {item.strMeasure2}</h4>
                            <h4>{item.strIngredient3}  {item.strMeasure3}</h4>
                            <h4>{item.strIngredient4}  {item.strMeasure4}</h4>
                            <h4>{item.strIngredient5}  {item.strMeasure5}</h4>
                            <h4>{item.strIngredient6}  {item.strMeasure6}</h4>
                            <h4>{item.strIngredient7}  {item.strMeasure7}</h4>
                            <h4>{item.strIngredient8}  {item.strMeasure8}</h4>
                            <h4>{item.strIngredient9}  {item.strMeasure9}</h4>
                            <h4>{item.strIngredient10}  {item.strMeasure10}</h4>
                            <h4>{item.strIngredient11}  {item.strMeasure11}</h4>
                            <h4>{item.strIngredient12}  {item.strMeasure12}</h4>
                            <h4>{item.strIngredient13}  {item.strMeasure13}</h4>
                            <h4>{item.strIngredient14}  {item.strMeasure14}</h4>
                            <h4>{item.strIngredient15}  {item.strMeasure15}</h4>
                            <h4>{item.strIngredient16}  {item.strMeasure16}</h4>
                            <h4>{item.strIngredient17}  {item.strMeasure17}</h4>
                            <h4>{item.strIngredient18}  {item.strMeasure18}</h4>
                            <h4>{item.strIngredient19}  {item.strMeasure19}</h4>
                            <h4>{item.strIngredient20}  {item.strMeasure20}</h4>
                        </div>
                       

                        <div className="instructions">
                            <h2>Instructions</h2><br /><hr />
                            <h4 className='h4'>{item.strInstructions}</h4>
                        </div>



                    </div>
                    <div className="video">
                        <iframe className='iframe' src={`https://www.youtube.com/embed/${vId}`} alt="" />

                    </div>
                </div>)

            }
        </div>
    )
};

export default RecipeInfo;