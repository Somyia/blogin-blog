import types from './login.types'

const initialState = {
    user: null
}

const loginReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case types.SET_USER:
            return {
                ...state,
                user: { ...state.login, payload }
            }
        case types.REMOVE_USER:
            return {
                ...state,
                user: null
            }

        default:
            return state
    }
}


export default loginReducer
