import React, { useEffect } from 'react';
import { useParams ,useHistory} from 'react-router-dom';
import { useFetch } from '../hook/useFetch';

const Article = () => {
    const {id} = useParams();
    const history = useHistory();
    const url = "http://localhost:8000/articles/" + id;
    const {data:article,isPending,error} = useFetch(url);
   useEffect(() =>{
    if(error){
        //redirect
        //history.goBack();
        setTimeout(() =>{
            history.push('/');
        },2000);
        
    }
   },[error,history]);
  return (<div>
        {isPending && <p>Loading..</p>}
        {error && <p>{error}</p>}
        {article&& <div>
            <h2>{article.title}</h2>
            <h3>By {article.author}</h3>
            <p>{article.body}</p>
        </div>}
  </div>);
};

export default Article;
