import { persistStore } from 'redux-persist';
import createSagaMiddlaware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddlaware = createSagaMiddlaware({ sagaMonitor });

const middlewares = [sagaMiddlaware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddlaware.run(rootSaga);

export { store, persistor };
