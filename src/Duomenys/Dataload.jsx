import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BookCardComponent } from '../Komponentai/BookCardComponent';


export const DataLoad = () => {

  
    const [getData, setGetData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      axios
        .get('https://mondayexam.onrender.com/api/v1/books')
        .then((response) => {
          setGetData(response.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);
  
   
  if (isLoading) {
    return (<div>loading data...</div>)
   }
  
    return (
      <>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
    {getData?.map((book) => (
          <BookCardComponent key={book.id} cover={book.cover} title={book.title} author={book.author} category={book.category} price={book.price} reserved={book.reserved}/>
        ))}
    </div>
      
   
      </>
    );
  };