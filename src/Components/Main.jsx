import Home from './Home';
import { useState } from 'react';

function Main() {
  const [count,setCount]=useState(0)
  const [data,setData]=useState(100)
  return (
    <div className="App">
      Memo with React {count}
     <Home tata={data} />
     <button onClick={()=>setCount(count+1)}>count</button>
     <button onClick={()=>setData(data+1)}>Data</button>
    </div>
  );
}

export default Main;