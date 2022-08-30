import React from 'react';
import '../css/Food.css'

const RecipeIndex = ({alphaIndex}) => {
    const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    return (
        <div>
            {
                alpha.map(item => {
                    return(
                        <div className='numBox' onClick={()=>alphaIndex(item)}>
                            <h3>{item}</h3>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RecipeIndex;