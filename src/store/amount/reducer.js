const initialState = { amount: 0 }

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    // eslint-disable-next-line no-cond-assign
    if (action.type === "INCREMENT_MONEY") {
        return {
            ...state,
            amount: state.amount + 10,
        };
    }

    // eslint-disable-next-line no-cond-assign
    if (action.type === "DECREMENT_MONEY") {
        return {
            ...state,
            amount: state.amount - 10,
        };
    }

    return state;
}

export const selectCurrentAmount = (state) => {
    return state.amountReducer.amount;
}