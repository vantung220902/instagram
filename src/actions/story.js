import * as ACTION from '../constants/story';
export const getListStories = () => {
    return {
        type: ACTION.GET_STORIES,
    }
}
export const getListStoriesSuccess = (data) => {
    console.log(data);
    return {
        type: ACTION.GET_STORIES_SUCCESS,
        payload: { data }
    }
}
