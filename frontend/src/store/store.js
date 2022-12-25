import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { AuthReducer } from "./modules/auth/reducer";
import { UsersReducer } from "./modules/hasta/reducer";
import { IlacListReducer } from "./modules/ilac/reducer";

const combinedReducers = combineReducers({
  auth:AuthReducer,
  users:UsersReducer,
  ilacList:IlacListReducer
});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk));
}