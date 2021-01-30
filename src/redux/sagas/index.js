import { all } from 'redux-saga/effects';
import { homeWatcher } from './homeSaga';

const watchers = [
    homeWatcher(),
];

export default function* rootSaga() {
    yield all(watchers);
}