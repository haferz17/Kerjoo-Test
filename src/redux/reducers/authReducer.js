import {
    DoLoginStart,
    DoLoginSuccess,
    DoLoginFailed,
    DoLogoutStart,
    DoLogoutSuccess,
    DoLogoutFailed,
} from '../../config/actionType';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case DoLoginStart:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case DoLoginSuccess:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                token: action.data
            }
        case DoLoginFailed:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case DoLogoutStart:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case DoLogoutSuccess:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                token: null
            }
        case DoLogoutFailed:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            return state
    }
}

export default authReducer
