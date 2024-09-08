import {useState} from "react";

const Parent = () =>{

  const [message, setMessage] = useState('');

  const updateMessage = () =>{
      setMessage('Updated message using clicked')
  }

  return (
      <div>
        <p>{message}</p>
        <button onClick={updateMessage}>Update Message</button>
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
      </div>
  )
}
export default Parent;