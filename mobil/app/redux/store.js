import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthReducer } from "./modules/auth/reducer";
import { MedicineReducer } from "./modules/medicine/reducer";

const combinedReducers = combineReducers({
  auth:AuthReducer,
  medicine:MedicineReducer
});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}