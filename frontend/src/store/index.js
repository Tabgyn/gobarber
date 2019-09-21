import createSagaMiddlaware from 'redux-saga';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddlaware = createSagaMiddlaware({ sagaMonitor });

const middlewares = [sagaMiddlaware];

const store = createStore(rootReducer, middlewares);

sagaMiddlaware.run(rootSaga);

export default store;
