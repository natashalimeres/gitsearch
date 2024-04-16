import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getRepositoriesGQL,
  getRepositoryDetails,
} from "../../graphql/repository";
import {
  GetRepositoriesAction,
  GetRepositoryDetailsAction,
  repositoriesRequestError,
  repositoriesRequestSuccess,
  repositoryDetailsRequestError,
  repositoryDetailsRequestSuccess,
} from "../actions/repository";
import { ERepositoryActionTypes } from "../../models/repository";

function* getRepositoriesSaga(
  action: GetRepositoriesAction
): Generator<any, void, any> {
  try {
    const response = yield call(
      getRepositoriesGQL,
      action.payload.repositoryName
    );
    yield put(
      repositoriesRequestSuccess({
        repositories: response.repositories,
      })
    );
  } catch (error) {
    const message = error as string;
    yield put(repositoriesRequestError(message));
  }
}

function* getRepositoryDetailsSaga(
  action: GetRepositoryDetailsAction
): Generator<any, void, any> {
  try {
    const response = yield call(
      getRepositoryDetails,
      action.payload.owner,
      action.payload.name
    );
    yield put(repositoryDetailsRequestSuccess(response.repositoryDetails));
  } catch (error) {
    const message = error as string;
    yield put(repositoryDetailsRequestError(message));
  }
}

function* watchGetRepositories() {
  yield takeLatest(ERepositoryActionTypes.getRepositories, getRepositoriesSaga);
}

function* watchGetRepositoryDetails() {
  yield takeLatest(
    ERepositoryActionTypes.getRepositoryDetails,
    getRepositoryDetailsSaga
  );
}

export function* repositorySaga() {
  yield all([watchGetRepositories(), watchGetRepositoryDetails()]);
}
