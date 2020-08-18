import React from 'react';

const Card = (props) => {
    return(
        <div className="card">
            {/* Picture */}
            <h3> {props.item} </h3>
            <h4> {props.price} </h4>
            <p> {props.description} </p>
        </div>
    )
}

export default Card;