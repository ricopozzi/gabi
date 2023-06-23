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

const productsPerPage = 1

export  function ProductsSection(){
  const [ products, setProducts ] = useState<Entry<Products, undefined, string>[]>()
  const [ paginationState, setpaginationState ] = useState<number>(0)
  const [ paginationPages, setPaginationPages ] = useState<number>(0)
  const [ total, setTotal ] = useState<number>(0)



  async function getProducts(skip: number, tag?: string) {
    if(!tag){ 
      const { items, total: totalProducts } = await contentful.getEntries<Products>({skip: skip * productsPerPage, limit: productsPerPage})
      setTotal(totalProducts)
      const totalPages = Math.ceil(totalProducts / productsPerPage)
      setPaginationPages(totalPages)
      return setProducts(items)
    }
  
    const { items, total: totalProducts } = await contentful.getEntries<Products>({
      "metadata.tags.sys.id[all]": [tag],
      skip: skip * productsPerPage,
      limit: productsPerPage
    })
    const totalPages = Math.ceil(totalProducts / productsPerPage)
    setPaginationPages(totalPages)

  return setProducts(items)
  }

  useEffect(() => {
    getProducts(paginationState)
  }, [paginationState])

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

          <div className="flex items-center justify-center gap-x-4" >
              <button 
              disabled={0 === paginationState && true}
              onClick={() => setpaginationState((state) => state - 1)}
              className="px-4 rounded border font-medium bg-rose-100 text-rose-900 border-rose-800 disabled:opacity-25" >voltar</button>
              <button 
              disabled={(paginationState + 1) === paginationPages && true}
              onClick={() => setpaginationState((state) => state + 1)}
              className="px-4 rounded border font-medium bg-rose-100 text-rose-900 border-rose-800 disabled:opacity-25">avançar</button>
            </div>

          <div>
            <p className="font-light" >
              <span className="font-medium mr-1" >{paginationPages}</span> 
              Páginas
          </p>
            </div>
          </div>
    )
}