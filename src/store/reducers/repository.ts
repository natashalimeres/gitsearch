import {
  ERepositoryActionTypes,
  RepositoryState,
} from "../../models/repository";
import {
  ErrorRepositoriesAction,
  ErrorRepositoryDetailsAction,
  GetRepositoriesAction,
  GetRepositoryDetailsAction,
  SuccessRepositoriesAction,
  SuccessRepositoryDetailsAction,
} from "../actions/repository";

const initialState: RepositoryState = {
  loading: false,
  success: false,
  error: "",
  data: [],
  loadingDetails: false,
  successDetails: false,
  errorDetails: "",
  dataDetails: null,
  owner: "",
  name: "",
};

type AllActions =
  | GetRepositoriesAction
  | SuccessRepositoriesAction
  | ErrorRepositoriesAction
  | GetRepositoryDetailsAction
  | ErrorRepositoryDetailsAction
  | SuccessRepositoryDetailsAction;

export const Repository = (state = initialState, action: AllActions) => {
  switch (action.type) {
    case ERepositoryActionTypes.getRepositories:
      return {
        ...state,
        loading: true,
      };
    case ERepositoryActionTypes.requestSuccess:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
        data: action.payload.repositories,
      };
    case ERepositoryActionTypes.requestError:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.payload.message,
      };
    case ERepositoryActionTypes.getRepositoryDetails:
      return {
        ...state,
        loadingDetails: true,
        owner: action.payload.owner,
        name: action.payload.name,
      };
    case ERepositoryActionTypes.requestDetailsSuccess:
      return {
        ...state,
        loadingDetails: false,
        errorDetails: false,
        successDetails: true,
        dataDetails: action.payload.repository,
      };
    case ERepositoryActionTypes.requestDetailsError:
      return {
        ...state,
        loadingDetails: false,
        errorDetails: action.payload.message,
        successDetails: false,
      };
    default:
      return { ...state };
  }
};
