export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CustomerOrder = {
  customer: Scalars["String"];
  order: StockInput;
};

export type LabYak = {
  __typename?: "LabYak";
  age: Scalars["Float"];
  ageLastShaved: Scalars["Float"];
  name: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  order?: Maybe<Stock>;
};

export type MutationOrderArgs = {
  customerOrder: CustomerOrder;
  timeInDays: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  herd: Array<Maybe<LabYak>>;
  stock: Stock;
};

export type QueryHerdArgs = {
  timeInDays: Scalars["Int"];
};

export type QueryStockArgs = {
  timeInDays: Scalars["Int"];
};

export type Stock = {
  __typename?: "Stock";
  milk: Scalars["Float"];
  skins: Scalars["Int"];
};

export type StockInput = {
  milk?: InputMaybe<Scalars["Float"]>;
  skins?: InputMaybe<Scalars["Int"]>;
};
