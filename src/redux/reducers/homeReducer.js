import {
    GetDataStart,
    GetDataSuccess,
    GetDataFailed,
    DoAbsenStart,
    DoAbsenSuccess,
    DoAbsenFailed,
    GetAbsenStart,
    GetAbsenSuccess,
    GetAbsenFailed,
} from '../../config/actionType';

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: [],
    dataAbsen: [],
    finishedType: []
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
        case DoAbsenStart:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case DoAbsenSuccess:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                // data: action.data
            }
        case DoAbsenFailed:
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case GetAbsenStart:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case GetAbsenSuccess:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                dataAbsen: action.data.data,
                finishedType: action.data.finishedType
            }
        case GetAbsenFailed:
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
