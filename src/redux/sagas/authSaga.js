
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    DoLogin,
    DoLoginStart,
    DoLoginSuccess,
    DoLoginFailed,
    DoLogout,
    DoLogoutStart,
    DoLogoutSuccess,
    DoLogoutFailed,
} from '../../config/actionType';
import { DoLoginApi, DoLogoutApi } from '../../config/api';
import AsyncStorage from '@react-native-community/async-storage';

function* doLogin({ item }) {
    yield put({ type: DoLoginStart });
    try {
        const res = yield axios.post(DoLoginApi, item)
        const token = res.data.access_token
        yield AsyncStorage.setItem("token", token)

        yield put({ type: DoLoginSuccess, data: token });
    } catch (error) {
        yield put({ type: DoLoginFailed });
    }
}
function* doLogout() {
    yield put({ type: DoLogoutStart });
    try {
        const token = yield AsyncStorage.getItem("token")
        const res = yield axios.post(DoLogoutApi, {}, {
            headers: { Authorization: `Bearer ${token}` }
        })
        yield AsyncStorage.setItem("token", "")

        yield put({ type: DoLogoutSuccess });
    } catch (error) {
        yield put({ type: DoLogoutFailed });
    }
}

export function* authWatcher() {
    yield takeLatest(DoLogin, doLogin);
    yield takeLatest(DoLogout, doLogout);
}   