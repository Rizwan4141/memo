import React, { memo } from 'react';


const Try = () => {
    const submitFrom=(e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={submitFrom}></form>
           <h1>Try Components</h1> 
        <button>submit</button>
        </div>
    );
};

export default memo(Try);