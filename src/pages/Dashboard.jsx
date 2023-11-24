import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Menu from '../components/Menu.js';
import NewsGrid from '../components/NewsGrid.js';


function Dashboard() {
  const[items,setItems]=useState([]);
  const [active,setActive] = useState(1);
  const [category,setCategory]=useState("general");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=e66ae99e31484942a9af6db074926a23`)
    .then(res=>res.json())
    .then(data=>setItems(data.articles))
  },[category])
  return (
    <div className='dash'>
      <h1 className='title-home'>See the latest news 📰</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    
    </div>
  )
}

export default Dashboard