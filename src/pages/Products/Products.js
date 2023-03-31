import './products.css'
import { useEffect, useState } from 'react'
import Cards from '../../components/Cards/Cards'

const Products = () => {
  const [products, setProducts] = useState([])

  const bringProductsCategory = async () => {
    const res = await fetch('https://fakestoreapi.com/products/category/jewelery')
    const data = await res.json()

    setProducts(data)
  }

  useEffect(() => {
    bringProductsCategory()
  }, [])

  console.log(products)

  return (
    <section className='cards-container'>
      {
        products.length === 0
          ? <h2 className='cards-loading'>Loading products ...</h2>
          : products.map((product) => {
            const { id, title, price, description, category, image } = product
            return (
              <Cards
                key={id}
                id={id}
                title={title.slice(0, 50)}
                price={price}
                description={description.slice(0, 50)}
                category={category}
                image={image}
              />
            )
          })
      }
    </section>
  )
}

export default Products
