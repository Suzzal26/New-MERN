import {useEffect, useId, useState} from 'react'
import axios from "axios"
import {Table} from "../components/Table"

const UseEff = () => {
    const [post,setPost]=useState([]);

    useEffect(()=>{
            const fetchData=async()=>{
                try{
                    const {data}=await axios("https://dummyjson.com/posts")
                    setPost(data.posts);
                }catch(error){
                    console.error("Error while fetching", error)
                }
            }
            
            fetchData();  
    })
  return (
    <div>{post.length>0 && <Table header={["id","title","body","useId","tags","reaction"]}
    body={post}
    />
    }</div>
  )
}

export default UseEff;