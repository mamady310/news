import React from 'react';

const Food = ({strMeal, strThumb, strYoutube}) => {
    return (
        <div className="food">
            <a href={strYoutube} target='_blank' rel="noopener noreferrer">
                <h3>{strThumb}</h3></a>
            <h3>{strMeal}</h3>

        </div>
    )
}

export default Food;