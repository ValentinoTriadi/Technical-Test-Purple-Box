import { combineReducers, configureStore } from "@reduxjs/toolkit";
import simpleFormReducer from "./reducer/simple-form.reducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
	stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
	simpleForm: simpleFormReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

export const createPreloadedState = (
  customState
) => {
  return {
		simpleForm: {
			...store.getState().simpleForm,
			...customState.simpleForm,
		},
  };
};