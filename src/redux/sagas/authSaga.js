
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    DoLogin,
    DoLoginStart,
    DoLoginSuccess,
    DoLoginFailed,
} from '../../config/actionType';
import { DoLoginApi } from '../../config/api';
import AsyncStorage from '@react-native-community/async-storage';

function* doLogin({ item }) {
    yield put({ type: DoLoginStart });
    try {
        const res = yield axios.post(DoLoginApi, item)
        const token = res.data.access_token
        yield AsyncStorage.setItem("token", token)

        yield put({ type: DoLoginSuccess });
    } catch (error) {
        yield put({ type: DoLoginFailed });
    }
}

export function* authWatcher() {
    yield takeLatest(DoLogin, doLogin);
}   