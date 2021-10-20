import React, { useState, useEffect } from "react";
import List from "./Card";




const Blog = () => {

    const [appState, setAppState] = useState({
        data: null, 
    });

    useEffect(() => {
        const apiURL = `http://127.0.0.1:8005/api/blog`;
        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {
                setAppState({data: data});
            })
            .catch(error => console.log(error));
    }, [setAppState]);
    return (
            
        <List data={appState.data}>
        </List>    


  
    );
            };
export default Blog;


