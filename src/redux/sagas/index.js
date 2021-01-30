import { all } from 'redux-saga/effects';
import { authWatcher } from './authSaga';
import { homeWatcher } from './homeSaga';

const watchers = [
    authWatcher(),
    homeWatcher(),
];

export default function* rootSaga() {
    yield all(watchers);
}