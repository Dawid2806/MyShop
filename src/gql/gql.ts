/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query GetCategory {\n  categories {\n    description\n    slug\n    id\n    name\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetAllProductsInShop {\n  products {\n    name\n    slug\n    id\n    price\n    images {\n      url\n    }\n  }\n}\n\nquery GetProductDebailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    name\n    price\n    slug\n    description\n    images(first: 1) {\n      url\n      stage\n    }\n  }\n}\n\nquery GetAllProductsInCurrenCategory($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        url\n      }\n    }\n  }\n}": types.GetCategoryDocument,
};

export function graphql(source: "query GetCategory {\n  categories {\n    description\n    slug\n    id\n    name\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetAllProductsInShop {\n  products {\n    name\n    slug\n    id\n    price\n    images {\n      url\n    }\n  }\n}\n\nquery GetProductDebailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    name\n    price\n    slug\n    description\n    images(first: 1) {\n      url\n      stage\n    }\n  }\n}\n\nquery GetAllProductsInCurrenCategory($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        url\n      }\n    }\n  }\n}"): (typeof documents)["query GetCategory {\n  categories {\n    description\n    slug\n    id\n    name\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        url\n      }\n    }\n  }\n}\n\nquery GetProductsSlugs {\n  products {\n    slug\n  }\n}\n\nquery GetAllProductsInShop {\n  products {\n    name\n    slug\n    id\n    price\n    images {\n      url\n    }\n  }\n}\n\nquery GetProductDebailsBySlug($slug: String) {\n  product(where: {slug: $slug}) {\n    id\n    name\n    price\n    slug\n    description\n    images(first: 1) {\n      url\n      stage\n    }\n  }\n}\n\nquery GetAllProductsInCurrenCategory($slug: String) {\n  categories(where: {slug: $slug}) {\n    products {\n      id\n      name\n      price\n      slug\n      images {\n        url\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;