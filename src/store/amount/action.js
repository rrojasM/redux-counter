const increment = () => {
    return {
        type: "INCREMENT_MONEY",
        payload: 10,
    }
}

const decrement = () => {
    return {
        type: "DECREMENT_MONEY",
        payload: - 10,
    }
}

export { increment, decrement }