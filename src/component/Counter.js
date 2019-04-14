import React, { useState, useEffect } from 'react';

export default function Counter(){
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    return(
                
        <React.Fragment>
            <p>you clicked{count}times.</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </React.Fragment>
    );
}


