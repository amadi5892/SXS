import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions';

const Card = (props) => {
    const dispatch = useDispatch();

    return(
        <div className="card">
            {/* Picture */}
            <h3> {props.item} </h3>
            <h4> {props.price} </h4>
            <p> {props.description} </p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Card;