/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query GetCategory {\n  categories {\n    name\n    id\n    description\n    products {\n      name\n      id\n      price\n      image {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductDebailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    name\n    longDescription\n    id\n    description\n    slug\n    price\n    image {\n      url\n    }\n  }\n}\n\nquery GetAllProductsInCategory($name: String) {\n  categories(where: {name: $name}) {\n    id\n    products {\n      id\n      name\n      price\n      slug\n      image {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductSlug {\n  categories {\n    products {\n      slug\n    }\n  }\n}": types.GetCategoryDocument,
};

export function graphql(source: "query GetCategory {\n  categories {\n    name\n    id\n    description\n    products {\n      name\n      id\n      price\n      image {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductDebailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    name\n    longDescription\n    id\n    description\n    slug\n    price\n    image {\n      url\n    }\n  }\n}\n\nquery GetAllProductsInCategory($name: String) {\n  categories(where: {name: $name}) {\n    id\n    products {\n      id\n      name\n      price\n      slug\n      image {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductSlug {\n  categories {\n    products {\n      slug\n    }\n  }\n}"): (typeof documents)["query GetCategory {\n  categories {\n    name\n    id\n    description\n    products {\n      name\n      id\n      price\n      image {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductDebailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    name\n    longDescription\n    id\n    description\n    slug\n    price\n    image {\n      url\n    }\n  }\n}\n\nquery GetAllProductsInCategory($name: String) {\n  categories(where: {name: $name}) {\n    id\n    products {\n      id\n      name\n      price\n      slug\n      image {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductSlug {\n  categories {\n    products {\n      slug\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;