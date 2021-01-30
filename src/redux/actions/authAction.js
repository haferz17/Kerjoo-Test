import { DoLogin } from '../../config/actionType';

export const doLoginAction = (item) => {
    return {
        type: DoLogin,
        item
    }
}