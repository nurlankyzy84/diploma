import React from 'react';
import SecHeader from './SecHeader';
import '../css/Food.css'
import FoodItem from './FoodItem';
import RecipeIndex from './RecipeIndex';
import { useState } from 'react';
import { useEffect } from 'react';

const Food = () => {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a")
    const [item, setItem] = useState()
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            console.log(data.meals)
            setItem(data.meals)
            setShow(true)
        })
    }, [url])

    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) => {
        if (evt.key === 'Enter') {
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }


    return (
        <div className='body'>
            <div> <SecHeader /></div>
            <div className='main'>
                <div className="heading">
                    <h1>MADE WITH LOVE</h1>
                    <h4>It's not true that money can't buy happiness. I mean, have you tried buying ice cream? It's the same thing!</h4>
                </div>

                <div className="searchBox">
                    <input type="search" className='search-bar' onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} />
                </div>

                <div className="allFood">
                    <div className="indexContainer">
                        <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />

                        {
                            show ? <FoodItem data={item} /> : "Not Found"
                        }
                    </div> 

                    {/* <div id="containerFood">
                        

                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default Food;