import { GetData, DoAbsen } from '../../config/actionType';

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