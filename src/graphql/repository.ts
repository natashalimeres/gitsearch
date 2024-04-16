import { gql } from "@apollo/client";
import { client } from ".";

const repositoryQuery = gql`
  query repositoryQuery($repositoryName: String!) {
    search(query: $repositoryName, type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            url
            owner {
              avatarUrl
              login
            }
            primaryLanguage {
              color
              name
            }
          }
        }
      }
    }
  }
`;

const repositoryDetailsQuery = gql`
  query repositoryDetailsQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      name
      description
      createdAt
      updatedAt
      url
      owner {
        login
      }
      primaryLanguage {
        name
        color
      }
      stargazers {
        totalCount
      }
      forks {
        totalCount
      }
      issues(states: OPEN) {
        totalCount
      }
      pullRequests(states: OPEN) {
        totalCount
      }
    }
  }
`;

export const getRepositoriesGQL = async (repositoryName: string) => {
  try {
    const { data } = await client.query<any, any>({
      query: repositoryQuery,
      variables: {
        repositoryName: `in:name,description ${repositoryName}`,
      },
    });
    const repositories = data.search.edges.map((edge: any) => edge.node);
    return { repositories };
  } catch (error) {
    throw new Error("Houve um problema ao resgatar a lista de repositórios.");
  }
};

export const getRepositoryDetails = async (owner: string, name: string) => {
  try {
    const { data } = await client.query<any>({
      query: repositoryDetailsQuery,
      variables: {
        owner,
        name,
      },
    });
    const repositoryDetails = data.repository;
    return { repositoryDetails };
  } catch (error) {
    throw new Error(
      "Houve um problema ao resgatar os detalhes do repositório."
    );
  }
};
