import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import firebaseConfig from './firebaseClient';
import rootReducer from './reducers';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithFirebase = compose(
//     reactReduxFirebase(config, { userProfile: 'users' }),
// )(createStore)

// Create store with reducers and initial state
// const store = createStoreWithFirebase(rootReducer, initialState)

// export default function configureStore(preloadedState) {
//     return createStore(
//         rootReducer,
//         preloadedState,
//         composeEnhancers(
//             applyMiddleware(
//                 reactReduxFirebase(firebaseConfig, { }),
//                 thunkMiddleware,
//             ),
//         )
//     )
// }

//
// const createStoreWithMiddleware = compose(
//     reactReduxFirebase(firebaseConfig,
//         {
//
//         }
//     ),
//     thunkMiddleware,
//     typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
// )(createStore);
// export default createStoreWithMiddleware(rootReducer)


console.log("firebaseConfig", firebaseConfig);
export default function configureStore (initialState, history) {
    const createStoreWithMiddleware = compose(
        reactReduxFirebase(firebaseConfig, { userProfile: 'users' }),
        // Redux Devtools
        applyMiddleware(
            thunkMiddleware.withExtraArgument(getFirebase)
        ),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )(createStore)
    const store = createStoreWithMiddleware(rootReducer)
    return store
}