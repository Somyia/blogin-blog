import types from './login.types';


export const userLogin = login => {
    return {
        type: types.SET_USER,
        payload: login
    }

}

export const userLogOut = logout => {
    return {
        type: types.REMOVE_USER,
        payload: logout
    }

}






