/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date with time (isoformat) */
  DateTime: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type Campaign = {
  __typename?: 'Campaign';
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  campaignId: Scalars['UUID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  parentId?: Maybe<Scalars['UUID']['output']>;
  title: Scalars['String']['output'];
};

export type Entry = {
  __typename?: 'Entry';
  campaignId: Scalars['String']['output'];
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  entryTextRaw: Scalars['String']['output'];
  entryTextRich: Scalars['String']['output'];
  entryTextSummary?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type EntryImage = {
  __typename?: 'EntryImage';
  createdAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export type EntryMetadata = {
  __typename?: 'EntryMetadata';
  campaignId: Scalars['String']['output'];
  categoryId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  lastModifiedAt: Scalars['DateTime']['output'];
  lastModifiedBy: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Job = {
  __typename?: 'Job';
  id: Scalars['UUID']['output'];
  status: JobStatus;
};

export enum JobStatus {
  Completed = 'COMPLETED',
  Error = 'ERROR',
  InProgress = 'IN_PROGRESS'
}

export type Mutation = {
  __typename?: 'Mutation';
  createCampaign: Campaign;
  createCategory: Category;
  createEntry: Entry;
  generateImageForEntry: Job;
  updateCampaign: Campaign;
  updateEntry: Entry;
};


export type MutationCreateCampaignArgs = {
  title: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  campaignId: Scalars['UUID']['input'];
  parentId?: InputMaybe<Scalars['UUID']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateEntryArgs = {
  campaignId: Scalars['UUID']['input'];
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  title: Scalars['String']['input'];
};


export type MutationGenerateImageForEntryArgs = {
  campaignId: Scalars['UUID']['input'];
  entryId: Scalars['UUID']['input'];
};


export type MutationUpdateCampaignArgs = {
  campaignId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
};


export type MutationUpdateEntryArgs = {
  entryId: Scalars['UUID']['input'];
  entryTextRaw: Scalars['String']['input'];
  entryTextRich: Scalars['String']['input'];
  entryTextSummary?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type PresignedUploadUrl = {
  __typename?: 'PresignedUploadUrl';
  fields: PresignedUploadUrlFields;
  url: Scalars['String']['output'];
};

export type PresignedUploadUrlFields = {
  __typename?: 'PresignedUploadUrlFields';
  algorithm: Scalars['String']['output'];
  credential: Scalars['String']['output'];
  date: Scalars['String']['output'];
  key: Scalars['String']['output'];
  policy: Scalars['String']['output'];
  signature: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  campaigns: Array<Campaign>;
  categories: Array<Category>;
  entriesMetadata: Array<EntryMetadata>;
  entry: Entry;
  entryImages: Array<EntryImage>;
  imageUploadUrl: PresignedUploadUrl;
  jobs?: Maybe<Job>;
};


export type QueryCategoriesArgs = {
  campaignId: Scalars['UUID']['input'];
};


export type QueryEntriesMetadataArgs = {
  campaignId: Scalars['UUID']['input'];
};


export type QueryEntryArgs = {
  entryId: Scalars['UUID']['input'];
};


export type QueryEntryImagesArgs = {
  campaignId: Scalars['UUID']['input'];
  entryId: Scalars['UUID']['input'];
};


export type QueryImageUploadUrlArgs = {
  campaignId: Scalars['UUID']['input'];
};


export type QueryJobsArgs = {
  campaignId: Scalars['UUID']['input'];
  jobId: Scalars['UUID']['input'];
};

export type CreateCampaignMutationVariables = Exact<{
  title: Scalars['String']['input'];
}>;


export type CreateCampaignMutation = { __typename?: 'Mutation', createCampaign: { __typename?: 'Campaign', id: any, title: string } };

export type CreateEntryMutationVariables = Exact<{
  campaignId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type CreateEntryMutation = { __typename?: 'Mutation', createEntry: { __typename?: 'Entry', id: any, title: string } };

export type UpdateEntryMutationVariables = Exact<{
  entryId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
  entryTextRich: Scalars['String']['input'];
  entryTextRaw: Scalars['String']['input'];
  entryTextSummary?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateEntryMutation = { __typename?: 'Mutation', updateEntry: { __typename?: 'Entry', id: any, title: string, entryTextRich: string, entryTextRaw: string, entryTextSummary?: string | null } };

export type FetchEntryImagesQueryVariables = Exact<{
  campaignId: Scalars['UUID']['input'];
  entryId: Scalars['UUID']['input'];
}>;


export type FetchEntryImagesQuery = { __typename?: 'Query', entryImages: Array<{ __typename?: 'EntryImage', url: string, createdAt: any }> };

export type FetchJobQueryVariables = Exact<{
  campaignId: Scalars['UUID']['input'];
  jobId: Scalars['UUID']['input'];
}>;


export type FetchJobQuery = { __typename?: 'Query', jobs?: { __typename?: 'Job', id: any, status: JobStatus } | null };

export type GenerateEntryImageMutationVariables = Exact<{
  campaignId: Scalars['UUID']['input'];
  entryId: Scalars['UUID']['input'];
}>;


export type GenerateEntryImageMutation = { __typename?: 'Mutation', generateImageForEntry: { __typename?: 'Job', id: any, status: JobStatus } };

export type FetchCampaignItemsMetadataQueryVariables = Exact<{
  campaignId: Scalars['UUID']['input'];
}>;


export type FetchCampaignItemsMetadataQuery = { __typename?: 'Query', campaigns: Array<{ __typename?: 'Campaign', id: any, title: string, createdAt: any, createdBy: string }>, entriesMetadata: Array<{ __typename?: 'EntryMetadata', id: any, title: string, createdAt: any, createdBy: string, lastModifiedAt: any, lastModifiedBy: string, categoryId?: string | null }>, categories: Array<{ __typename?: 'Category', id: any, title: string, parentId?: any | null, createdAt: any }> };

export type FetchEntryQueryVariables = Exact<{
  entryId: Scalars['UUID']['input'];
}>;


export type FetchEntryQuery = { __typename?: 'Query', entry: { __typename?: 'Entry', id: any, campaignId: string, title: string, entryTextRich: string, createdAt: any, lastModifiedAt: any, createdBy: string, lastModifiedBy: string, entryTextSummary?: string | null, categoryId?: string | null } };

export type FetchCampaignsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchCampaignsQuery = { __typename?: 'Query', campaigns: Array<{ __typename?: 'Campaign', id: any, title: string }> };


export const CreateCampaignDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateCampaign"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCampaign"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateCampaignMutation, CreateCampaignMutationVariables>;
export const CreateEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<CreateEntryMutation, CreateEntryMutationVariables>;
export const UpdateEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entryTextRich"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entryTextRaw"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entryTextSummary"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"entryTextRich"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entryTextRich"}}},{"kind":"Argument","name":{"kind":"Name","value":"entryTextRaw"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entryTextRaw"}}},{"kind":"Argument","name":{"kind":"Name","value":"entryTextSummary"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entryTextSummary"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"entryTextRich"}},{"kind":"Field","name":{"kind":"Name","value":"entryTextRaw"}},{"kind":"Field","name":{"kind":"Name","value":"entryTextSummary"}}]}}]}}]} as unknown as DocumentNode<UpdateEntryMutation, UpdateEntryMutationVariables>;
export const FetchEntryImagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchEntryImages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entryImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}},{"kind":"Argument","name":{"kind":"Name","value":"entryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<FetchEntryImagesQuery, FetchEntryImagesQueryVariables>;
export const FetchJobDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchJob"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}},{"kind":"Argument","name":{"kind":"Name","value":"jobId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"jobId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<FetchJobQuery, FetchJobQueryVariables>;
export const GenerateEntryImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GenerateEntryImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateImageForEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}},{"kind":"Argument","name":{"kind":"Name","value":"entryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GenerateEntryImageMutation, GenerateEntryImageMutationVariables>;
export const FetchCampaignItemsMetadataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCampaignItemsMetadata"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaigns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"entriesMetadata"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedBy"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"campaignId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<FetchCampaignItemsMetadataQuery, FetchCampaignItemsMetadataQueryVariables>;
export const FetchEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"entryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"entryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"campaignId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"entryTextRich"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"}},{"kind":"Field","name":{"kind":"Name","value":"lastModifiedBy"}},{"kind":"Field","name":{"kind":"Name","value":"entryTextSummary"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}}]}}]}}]} as unknown as DocumentNode<FetchEntryQuery, FetchEntryQueryVariables>;
export const FetchCampaignsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchCampaigns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaigns"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FetchCampaignsQuery, FetchCampaignsQueryVariables>;