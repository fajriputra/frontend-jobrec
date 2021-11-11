import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducers from "./auth/reducer";
import companyReducers from "./profile/company/reducer";
import workerReducers from "./profile/worker/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "worker"],
  blacklist: [],
};

const rootReducers = combineReducers({
  auth: authReducers,
  company: companyReducers,
  worker: workerReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(promiseMiddleware, logger)
);
let persistor = persistStore(store);

export { store, persistor };
