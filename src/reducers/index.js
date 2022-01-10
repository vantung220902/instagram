import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import story from './story';
const rootReducer = combineReducers({
    story,
    form: formReducer,
});
export default rootReducer;
