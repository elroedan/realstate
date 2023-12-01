/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRealstate = /* GraphQL */ `
  query GetRealstate($id: ID!) {
    getRealstate(id: $id) {
      id
      description
      type
      streetAddress
      city
      country
      zipcode
      price
      area
      bedrooms
      bathrooms
      images
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRealstates = /* GraphQL */ `
  query ListRealstates(
    $filter: ModelRealstateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRealstates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        type
        streetAddress
        city
        country
        zipcode
        price
        area
        bedrooms
        bathrooms
        images
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
