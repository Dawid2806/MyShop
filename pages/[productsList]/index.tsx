import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import React from "react";
import { ProductsList } from "../../components/ProductsList/ProductsList";
import { apolloClient } from "../../graphql/apolloClient";
import { GetAllProductsInCategoryDocument, GetAllProductsInCategoryQuery, GetAllProductsInCategoryQueryVariables } from "../../src/gql/graphql";
import { InferGetStaticPaths } from "../../typs";

const ProductsListPage = ({ data } : InferGetServerSidePropsType<typeof getStaticProps>) => {
  if(!data){
    return <div>coś poszło nie tak</div>
  }
  return <>
  <div> 
   
    <ProductsList items={data[0].products} />
  </div>
  </> 
};

export default ProductsListPage;





export const getStaticPaths = async () => {
  const myParams: string[] = ["watch","t-shirts","shoes","sweatshirts"]
  const paths = myParams.map((el) => {
    return {
      params: {
        productsList : el
      }
    }
  });
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async ({params}: InferGetStaticPaths<typeof getStaticPaths>)=>{
  if(!params?.productsList){
    return{
      props:{},
    }
  }
  const {data} =await apolloClient.query<GetAllProductsInCategoryQuery,GetAllProductsInCategoryQueryVariables>({
    variables:{
      name: params?.productsList.toString()
    },
    query: GetAllProductsInCategoryDocument,

  })
  
  return {
    props:{
      data: data.categories
    }
  }
}