import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


export const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({ title: '', category: '', author: '', price: 0, cover: '' });

  

  const createNewProduct = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://mondayexam.onrender.com/api/v1/books', newProduct);
    <Navigate to="/"/>;
   

  };

  return (
    <>
      <h3>Registration of new book</h3>
      <div>
        <form onSubmit={handleSubmit} style={{ display: 'grid', rowGap: '10px' }}>

          <label>Title</label>
          <input name="title" onChange={createNewProduct} />

          <label>Author</label>
          <input name="author" onChange={createNewProduct} />

          <label>Category</label>
          <input name="category" onChange={createNewProduct} />

          <label>Price</label>
          <input name="price" type="number" onChange={createNewProduct} />

          <label>Cover</label>
          <input name="cover" onChange={createNewProduct} />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
