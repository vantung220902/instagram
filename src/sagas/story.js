import * as TYPES from '../constants/story';
import * as actions from '../actions/story';
import { getListStory }
    from '../api/story';
import { call, put, takeLatest } from 'redux-saga/effects';
function* watchListStories() {
    try {

        const response = yield call(getListStory);
        const { status, data } = response;
        if (status === 200) {
            yield put(actions.getListStoriesSuccess(data));
        }
    } catch (e) {
        yield put(actions.errorStory(e));
    }

}

export const StorySaga = [
    takeLatest(TYPES.GET_STORIES, watchListStories)
]