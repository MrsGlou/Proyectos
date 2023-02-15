import React from "react"

const PeopleCard = ({person}) => {
    const {name, age, image} = person
    return  (
        <article className='person'>
            <img src={image} alt = {name} />
            <div>
                <h2>{name}</h2>
                <h3>{age} years</h3>
            </div>
        </article>
    )
}

export default PeopleCard