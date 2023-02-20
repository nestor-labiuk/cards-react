import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {

  const [products, setProducts] = useState([])

  const bringProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    bringProducts()
  }, [])


  return (
    <>
      <Header >
      
      </Header>
      <section className="cards-container">
        {
          products.map((product) => {
            const { id, title, price, description, category, image } = product

            return (<Cards
              key={id}
              title={title.slice(0, 50)}
              price={price}
              description={description.slice(0, 50)}
              category={category}
              image={image}
            />)
          })
        }
      </section>

      <Footer>

      </Footer>

    </>
  );
}

export default App;
