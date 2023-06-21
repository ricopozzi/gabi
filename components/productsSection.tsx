'use client'

import { contentful } from "@/lib/contentful"
import { ProductCard } from "./ProductCard"
import { useEffect, useState } from "react"
import {  Entry, EntryFieldTypes} from "contentful"

type Products = {
  contentTypeId: "product",
  fields: {
    title: EntryFieldTypes.Text,
    image: any
    description: EntryFieldTypes.Text,
    sizes: EntryFieldTypes.Array<EntryFieldTypes.Symbol<string>>,
  }
}



export  function ProductsSection(){
  const [ products, setProducts ] = useState<Entry<Products, undefined, string>[]>()

  async function getProducts(tag?: string) {

    if(!tag ){ 
      const { items } = await contentful.getEntries<Products>()

      return setProducts(items)
    }
  
    const { items } = await contentful.getEntries<Products>({
      "metadata.tags.sys.id[all]": [tag]
    })
  
  return setProducts(items)
  }

  useEffect(() => {
    getProducts()

  }, [])

    return (
        <div className="mt-10 flex flex-wrap gap-7 justify-center items-center">
          {products !== undefined ? (
            products?.map((item, index) => (
              <ProductCard 
              key={index} 
              description={item.fields.description} 
              //@ts-ignore
              imageUrl={`https:${item?.fields?.image?.fields?.file.url}`} 
              sizes={item.fields.sizes} 
              title={item.fields.title} />
            ))
          ) : (
            <div>loading</div>
          )}
          </div>
    )
}