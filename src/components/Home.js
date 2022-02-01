import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useFetch} from '../hook/useFetch';
import './Home.css'
const Home = () => {
    const[url,setUrl] = useState('http://localhost:8000/articles');
    const {data,error,loading} = useFetch(url);

  return (<div className='home'>
    <h2>Homepage</h2>
    {error && <h1>{error}</h1>}
    {loading && <h1>{loading}</h1>}
    {data && data.map((d) =>(
        <div className='card' key ={d.id}>
            <h1>{d.author}</h1>
             <h1>{d.title}</h1>
             {/* <p>{d.body}</p>    */}
             <h1>{d.id}</h1>
             <Link to = {`/articles/${d.id}`}>Read More...</Link>
        </div>
    ))}
    </div>);
};

export default Home;
