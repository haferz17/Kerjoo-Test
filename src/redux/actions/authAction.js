import { DoLogin, DoLogout } from '../../config/actionType';

export const doLoginAction = (item) => {
    return {
        type: DoLogin,
        item
    }
}
export const doLogoutAction = () => {
    return {
        type: DoLogout
    }
}