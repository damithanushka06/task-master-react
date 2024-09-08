import {useState} from "react";
import Child from "./Child";

const Parent = () =>{

  const [message, setMessage] = useState('');

  return (
      <div>
        <p>{message}</p><br></br>
        <Child message={message} onMessageChange={setMessage}/>
      </div>

  )
}
export default Parent;