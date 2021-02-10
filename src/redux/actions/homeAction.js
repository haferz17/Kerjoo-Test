import { GetData, DoAbsen, GetAbsen } from '../../config/actionType';

export const getDataAction = () => {
    return {
        type: GetData,
    }
}
export const doAbsenAction = (item) => {
    return {
        type: DoAbsen,
        item
    }
}
export const getAbsenAction = (item) => {
    return {
        type: GetAbsen,
        item
    }
}