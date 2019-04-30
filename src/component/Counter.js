import React, { useState, useEffect } from 'react';

export default function Counter(){
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        document.title = `You have ${count} likes`;
      });
    return(
                
        <React.Fragment>
            <h4>you have{count}likes.</h4>
            <button onClick={() => setCount(count+1)}>like!</button>
        </React.Fragment>
    );
}


