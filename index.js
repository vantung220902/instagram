import { registerRootComponent } from 'expo';
import AppContainer from './src/containers/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);
sagaMiddleware.run(rootSaga);

registerRootComponent(App);
