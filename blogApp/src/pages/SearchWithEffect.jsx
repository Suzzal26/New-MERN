import {useEffect, useState} from 'react'
import axios from "axios"

const [query,setQuery]=useState("")
const [data,setData]=useState([])

const SearchWithEffect = () => {
    const [post,setPost]=useState([]);

    useEffect(()=>{
            const fetchQuery=async()=>{
                try{
                    const {data}=await axios(`https://dummyjson.com/products/search?q=${query}`)
                    setData(data?.products ||[])
                }catch(error){
                    console.error("Error while fetching", error)
                }
            }
            
            fetchQuery();  
    }),[query]
  return (
    <div>
        <input placeholder='Enter your query'
        onChange={(e)=>setQuery(e.target.value)}/>
        {data.length>0?(
            data.map((item)={
                return<li key=(item?.id)>(item?.title)</li>
            })

        })
    </div>
  )
}

export default SearchWithEffect