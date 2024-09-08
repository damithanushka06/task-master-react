import {useEffect, useState} from "react";

const Parent = () =>{

  const [data, setData] = useState('');

  useEffect(()=>{
    fetch('https://api.github.com/users').then(response => response.json()).then(data=>{
        setData(data);
    }).catch(error =>{
        console.log(error);
    })

  })

  return (
      <div>
        <h1>Data</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
  )
}
export default Parent;