const INPUT_FIRST_NUMBER = 'INPUT_FIRST_NUMBER'
const INPUT_SECOND_NUMBER = 'INPUT_SECOND_NUMBER'

const INITIAL_STATE = {
    firstNumber: 0,
    secondNumber: 0,
}

export const inputFirstNumber = value => ({
    type: INPUT_FIRST_NUMBER,
    value
})

export const inputSecondNumber = value => ({
    type: INPUT_SECOND_NUMBER,
    value
})

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_FIRST_NUMBER:
            return {
                ...state,
                firstNumber: action.value || 0,
            }
        case INPUT_SECOND_NUMBER:
            return {
                ...state,
                secondNumber: action.value || 0
            }
        default:
            return state
    }
}