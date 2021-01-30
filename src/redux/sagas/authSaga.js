
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    DoLogin,
    DoLoginStart,
    DoLoginSuccess,
    DoLoginFailed,
} from '../../config/actionType';
import { DoLoginApi } from '../../config/api';

function* doLogin({ item }) {
    yield put({ type: DoLoginStart });
    try {
        const res = yield axios.post(DoLoginApi, item)
        const data = res.data

        yield put({ type: DoLoginSuccess, data });
    } catch (error) {
        yield put({ type: DoLoginFailed });
    }
}

export function* authWatcher() {
    yield takeLatest(DoLogin, doLogin);
}   