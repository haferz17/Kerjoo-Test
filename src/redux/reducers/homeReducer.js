import {
    GetDataStart,
    GetDataSuccess,
    GetDataFailed,
} from '../../config/actionType';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetDataStart:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case GetDataSuccess:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                data: action.data
            }
        case GetDataFailed:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        default:
            return state
    }
}

export default homeReducer
