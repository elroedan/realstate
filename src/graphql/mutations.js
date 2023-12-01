/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRealstate = /* GraphQL */ `
  mutation CreateRealstate(
    $input: CreateRealstateInput!
    $condition: ModelRealstateConditionInput
  ) {
    createRealstate(input: $input, condition: $condition) {
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
export const updateRealstate = /* GraphQL */ `
  mutation UpdateRealstate(
    $input: UpdateRealstateInput!
    $condition: ModelRealstateConditionInput
  ) {
    updateRealstate(input: $input, condition: $condition) {
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
export const deleteRealstate = /* GraphQL */ `
  mutation DeleteRealstate(
    $input: DeleteRealstateInput!
    $condition: ModelRealstateConditionInput
  ) {
    deleteRealstate(input: $input, condition: $condition) {
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
