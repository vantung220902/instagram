import { all } from '@redux-saga/core/effects';
import { storySaga } from './story'
function* rootSaga() {
    yield all([
        ...storySaga,
    ])
}
export default rootSaga;
