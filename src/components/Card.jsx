import React from 'react'

import './Card.css'

const Card = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => {
        !disabled ? handleChoice(card) : ""
    }
    return (
        <div className='card' key={card.id}>
            <div className={flipped ? "flipped" : ""}>
                <img className='front' src={card.src} alt="card front" />
                <img
                    className='back'
                    src="img/cover.png"
                    onClick={handleClick}
                    alt="card back"
                />
            </div>
        </div>
    )
}

export default Card