import * as TYPE from '../constants/story';
const init = {
    stories: [],
    item: null
}
const reducer = (state = init, action) => {
    let data = null;
    switch (action.type) {
        case TYPE.GET_STORIES:
            return {
                ...state,
            }
        case TYPE.GET_STORIES_SUCCESS:
            data = action.payload.data;
            return {
                ...state,
                stories: [...data]
            }
        default: return state;
    }
}
export default reducer;