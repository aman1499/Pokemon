import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import {persistStore,persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

const persistConfig={
    key: 'root',
    storage,
}
const persistReducers = persistReducer( persistConfig , rootReducer);
const store = createStore( persistReducers, composeWithDevTools());
export const persistor = persistStore(store);
export default store;