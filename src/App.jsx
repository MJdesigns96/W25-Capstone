import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'


function App() {
  const [products, setProducts] = useState([]);

  //fetch from express server
  useEffect(()=> {
    axios.get('http://localhost:8888/products')
    .then(response => setProducts(response.data))
    .catch(error => console.error(error));
  }, []);

  console.log(products);

  const productsList = products.map(entry => (
    <div key={entry.id}>
      <h1>Name: {entry.name}</h1>
      <p>Description Short: {entry.descriptionShort}</p>
      <h3>Price: ${entry.price}</h3>
      <p>
        Sizes: 
      </p>
      <p>
        Colors: {entry.colors.map(color => (
          color.colorName
        ))}
      </p>
      <p>Description Long: {entry.descriptionLong}</p>
      <ul>
        {entry.additionalDetails.map(prompt => (
          <>
            <li>materials: {prompt.materials}</li>
            <li>Recommended: {prompt.recommendedFor}</li>
            <li>Made In: {prompt.madeIn}</li>
            <li>Care: {prompt.care}</li>
            <li>Shipping: {prompt.shipping}</li>
          </>
        ))}
      </ul>
      <p>Type: {entry.type}</p>
      <p>Materials: {entry.materials.map(material => (
        material.material1
      ))}</p>
      <p>Promotion:</p>
      <p>Stock: {entry.stock}</p>
    </div>
  ))

  return (
    <>
      <div>
        <h1>Hello World</h1>
        {productsList}
      </div>
    </>
  )
}

export default App
