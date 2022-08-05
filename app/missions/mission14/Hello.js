import { useState, useEffect } from 'react'

function Hello() {
  const [name, setName] = useState('')
  useEffect(()=>{
    document.title = name
})
  return (
    <div>
      <p>
        <h1>useState & Effect</h1>
        <h2>Name is {name}</h2>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      </p>
    </div>
  );
}

export default Hello;