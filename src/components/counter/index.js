import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../store/amount/action";
import { selectCurrentAmount } from "../../store/amount/reducer";


const mapStateToProps = (state) => {
    return {
        amount: selectCurrentAmount(state)
    }
}

function Counter({ amount, increment, decrement }) {
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={() => increment()}>INCREMENT $10</button>
            <button onClick={() => decrement()}>DECREMENT $-10</button>
        </div>
    )
}

export default connect(mapStateToProps, { increment, decrement })(Counter);