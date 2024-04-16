export type RepositoryType = {
  name: string;
  description: string;
  id: string;
  url: string;
  owner: {
    avatarUrl: string;
    login: string;
  };
  primaryLanguage?: {
    color: string;
    name: string;
  };
};

export type RepositoryDetailsType = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  owner: {
    login: string;
  };
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
  stargazers: {
    totalCount: number;
  };
  forks: {
    totalCount: number;
  };
  issues: {
    totalCount: number;
  };
  pullRequests: {
    totalCount: number;
  };
};

export type RepositoryState = {
  loadingDetails: boolean;
  errorDetails: string;
  dataDetails: RepositoryDetailsType | null;
  successDetails: boolean;
  name: string;
  owner: string;
  data: RepositoryType[];
  loading: boolean;
  error: string;
  success: boolean;
};

export enum ERepositoryActionTypes {
  getRepositories = "repository/getRepositories",
  requestSuccess = "repository/requestSuccess",
  requestError = "repository/requestError",
  getRepositoryDetails = "repository/getRepositoryDetails",
  requestDetailsSuccess = "repository/requestDetailsSuccess",
  requestDetailsError = "repository/requestDetailsError",
}
