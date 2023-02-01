import React from 'react'
import { useRouter } from 'next/router'

function ProductDetail() {
    const router = useRouter();
    const {productId,id} = router.query  //the query name should we same as the name we are writting in square brackets
  return (
    <h1>Review {id} for Product {productId}</h1>
  )
}

export default ProductDetail