import React,{useState, useEffect} from 'react';
import App from '../../App';


export default function Counter(){
    const [ count,setCount] = useState(0)
    useEffect(() => {
        document.title =`you click ${count}times`;
      });

      return(
      <React.Fragment>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </React.Fragment>
    );
  }

