
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    GetData,
    GetDataStart,
    GetDataSuccess,
    GetDataFailed,
    DoAbsen,
    DoAbsenStart,
    DoAbsenSuccess,
    DoAbsenFailed,
} from '../../config/actionType';
import { GetDataApi, DoAbsenApi } from '../../config/api';
import AsyncStorage from '@react-native-community/async-storage';

function* getData() {
    yield put({ type: GetDataStart });
    try {
        const res = yield axios.get(GetDataApi)
        const data = res.data

        yield put({ type: GetDataSuccess, data });
    } catch (error) {
        yield put({ type: GetDataFailed });
    }
}
function* doAbsen({ item }) {
    yield put({ type: DoAbsenStart });
    try {
        const token = yield AsyncStorage.getItem("token")
        const res = yield axios.post(DoAbsenApi, item, {
            headers: { Authorization: `Bearer ${token}` }
        })
        const data = res.data

        yield put({ type: DoAbsenSuccess, data });
    } catch (error) {
        yield put({ type: DoAbsenFailed });
    }
}

export function* homeWatcher() {
    yield takeLatest(GetData, getData);
    yield takeLatest(DoAbsen, doAbsen);
}   