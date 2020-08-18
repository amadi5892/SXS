import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Card = (props) => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return(
        <div className="card">
            {/* Picture */}
            <h3> {props.item} </h3>
            <h4> {props.price} </h4>
            <p> {props.description} </p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button>-</button>
        </div>
    )
}

export default Card;