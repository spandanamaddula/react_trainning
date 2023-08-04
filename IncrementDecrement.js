import React, {useState} from 'react';

const IncrementDecrement= ()=>{
const  [counter ,setCounter]= useState(0);

const handleIncrement=()=>{
    setCounter(counter+1);
};
const handleDecrement=()=>{
    setCounter(counter-1);
};
return (
    <div>
    <h2>counter :  {counter}</h2> 
    <button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
    
</div>

);

};
export default IncrementDecrement;


