import { combineReducers } from "redux";
import { Modal } from "./reducers/modal";
import { Repository } from "./reducers/repository";

export const reducers = combineReducers({
  Repository,
  Modal,
});

export type ReducersState = ReturnType<typeof reducers>;
