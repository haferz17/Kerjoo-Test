
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
    GetAbsen,
    GetAbsenStart,
    GetAbsenSuccess,
    GetAbsenFailed,
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
        console.log("data", data)

        yield put({ type: DoAbsenSuccess, data });
    } catch (error) {
        yield put({ type: DoAbsenFailed });
    }
}
function* getAbsen({ item }) {
    yield put({ type: GetAbsenStart });
    try {
        const token = yield AsyncStorage.getItem("token")
        const res = yield axios.get(DoAbsenApi, {
            params: item,
            headers: { Authorization: `Bearer ${token}` }
        })
        const data = res.data.data
        const finishedType = data.map(item => item.type_id)
        const type = ['Masuk', 'Keluar', 'Istirahat', 'Selesai istirahat', 'Mulai lembur', 'Selesai lembur']
        const newData = type.map((item, index) => {
            return {
                type: item,
                id: index,
                data: data[index] || null
            }
        })

        yield put({ type: GetAbsenSuccess, data: { data: newData, finishedType } });
    } catch (error) {
        yield put({ type: GetAbsenFailed });
    }
}

export function* homeWatcher() {
    yield takeLatest(GetData, getData);
    yield takeLatest(DoAbsen, doAbsen);
    yield takeLatest(GetAbsen, getAbsen);
}   