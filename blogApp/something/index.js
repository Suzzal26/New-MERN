//API https://dummyjson.com/posts
//fetch API //Interview question

import axios from "axios";

//fetch "https://dummyjson.com/posts"
// .then((result)=>result.jason())
// .then((finalAns)=> console.log(finalAns))

axios.get("https://dummyjson.com/posts").then(({data})=>console.log(data));

import axios from "axios";
const fetching=async()=>{
    try{
        const response=await axios.get("https://dummyjson.com/posts")
        const data=response.data;
        console.log(data);
    }
    catch(error){
        console.error("Error while fetching", error)
    }
}

fetching();