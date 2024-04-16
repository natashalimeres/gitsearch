import {
  ERepositoryActionTypes,
  RepositoryDetailsType,
  RepositoryType,
} from "../../models/repository";

export type RepositoryAction<T> = {
  type: string;
  payload: T;
};

export type GetRepositoriesAction = {
  type: ERepositoryActionTypes.getRepositories;
  payload: {
    repositoryName: string;
  };
};

export type SuccessRepositoriesAction = {
  type: ERepositoryActionTypes.requestSuccess;
  payload: {
    repositories: RepositoryType[];
  };
};

export type ErrorRepositoriesAction = {
  type: ERepositoryActionTypes.requestError;
  payload: {
    message: string;
  };
};

export type GetRepositoryDetailsAction = {
  type: ERepositoryActionTypes.getRepositoryDetails;
  payload: {
    owner: string;
    name: string;
  };
};

export type SuccessRepositoryDetailsAction = {
  type: ERepositoryActionTypes.requestDetailsSuccess;
  payload: {
    repository: RepositoryDetailsType;
  };
};

export type ErrorRepositoryDetailsAction = {
  type: ERepositoryActionTypes.requestDetailsError;
  payload: {
    message: string;
  };
};

export const getRepositories = (repositoryName: string) => {
  return {
    type: ERepositoryActionTypes.getRepositories,
    payload: {
      repositoryName,
    },
  };
};

export const repositoriesRequestSuccess = ({
  repositories,
}: {
  repositories: RepositoryType[];
}) => {
  return {
    type: ERepositoryActionTypes.requestSuccess,
    payload: {
      repositories,
    },
  };
};

export const repositoriesRequestError = (message: string) => {
  return {
    type: ERepositoryActionTypes.requestError,
    payload: { message },
  };
};

export const getRepositoriesDetails = (owner: string, name: string) => {
  return {
    type: ERepositoryActionTypes.getRepositoryDetails,
    payload: { owner, name },
  };
};

export const repositoryDetailsRequestSuccess = (repository: RepositoryType) => {
  return {
    type: ERepositoryActionTypes.requestDetailsSuccess,
    payload: {
      repository,
    },
  };
};

export const repositoryDetailsRequestError = (message: string) => {
  return {
    type: ERepositoryActionTypes.requestDetailsError,
    payload: { message },
  };
};
