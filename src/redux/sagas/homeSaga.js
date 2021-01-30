
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
    GetData,
    GetDataStart,
    GetDataSuccess,
    GetDataFailed,
} from '../../config/actionType';
import { GetDataApi } from '../../config/api';

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

export function* homeWatcher() {
    yield takeLatest(GetData, getData);
}   