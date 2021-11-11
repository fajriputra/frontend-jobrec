import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducers from "./auth/reducer";
import companyReducers from "./profile/company/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "company"],
  blacklist: [],
};

const rootReducers = combineReducers({
  auth: authReducers,
  company: companyReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(promiseMiddleware, logger)
);
let persistor = persistStore(store);

export { store, persistor };
