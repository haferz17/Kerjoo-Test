import {
    DoLoginStart,
    DoLoginSuccess,
    DoLoginFailed,
} from '../../config/actionType';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
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
            }
        case DoLoginFailed:
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
