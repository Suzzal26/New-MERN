import { useState } from "react";

const Haha = () => {
  const [person, setPerson] = useState("Suzzal");
  const [color, setColor] = useState("red");
  const[temp,setTemp]=useState("")

  return (
    <div>
      
      Person:{person}
      <input 
      type="text" 
      placeholder="Enter your name" 
      onChange={(e)=>setTemp(e.target.value)}/>
      <button onClick={()=>setPerson(temp)}>Change</button>
      Color:{color}
      <input 
      type="text" 
      placeholder="Enter your color" 
      onChange={(e)=>setTemp(e.target.value)}/>
      <button onClick={()=>setColor(temp)}>Color</button>
    </div>
  );
};

export default Haha;
