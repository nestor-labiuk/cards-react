import {useEffect ,useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';

function App() {

  const [products, setProducts] = useState([])

  const bringProducts = async ()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    setProducts(data)
  }

  useEffect(() => {
    bringProducts()
  }, [])

  return (
    <>
      <section className="cards-container">
        {
          products?.map((product) => {
            const {id, title, price, description, category, image } = product
          
            return (<Cards
                key={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />)
          })
         }
      </section>

    </>
  );
}

export default App;
