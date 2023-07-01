import React,{ useState } from 'react';
import './App.css';
import Headerpage from './Components/heropage'
import FooterPage from './Components/Footer'

function App() {
  const [cart , setCart]=useState([])
  const [Products] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      price: "$80-$90"
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      price: "$5-$10"
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      price: "$80-$190"
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      price: "$180-$290"
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      price: "$780-$890"
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      price: "$380-$690"
    },
  ])
  const addToCart =(Products) =>{
    if(!cart.includes(Products)){
      setCart([...cart,Products])
    }else{
      removeCart(Products)
    }
  }

  const removeCart = (ProductsToRemove) =>{
    setCart(
      cart.filter((Products) => Products !== ProductsToRemove)
    );
  }

  const isProductInCart = (product) => {
    return cart.includes(product)
  }

  return ( 
     <div className='App'>
      <Headerpage cart={cart}/>
      <div className='card-container col mb-5 '>
      {Products.map((Products ,index)=>{
        const buttonText = isProductInCart(Products) ? 'Remove from Cart' : 'Add to Cart';
        return(
          <div class="card" key={index}>
  <img src={Products.url} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{Products.name}</h5>
    <p class="card-text">{Products.price}</p>
    <button onClick={()=> addToCart(Products)}>{buttonText}</button>
  </div>
</div>
        )
      })}
      </div>
      <FooterPage />
     </div>
  );
}

export default App;