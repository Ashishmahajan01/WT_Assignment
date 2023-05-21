import React from 'react';
import {useSelector,useDispatch } from 'react-redux';

export default function Counter () {
  
  const counter = useSelector((state)=>{return state.counter});
  const dispatch= useDispatch()
  

    const incrHandler =()=>{

      dispatch({type:'increment'});

    }

    const decrHandler =()=>{

      dispatch({type:'decrement'});

    }

  return (
   
  <div>
      <h1>Redux Counter</h1>
      <div >{counter}</div>
     <div>
       <button onClick={incrHandler}>increment</button>
       <button onClick={decrHandler}>decrement</button>
     </div>
      
      <div>
        <input type="text" onBlur={(e)=>{
          dispatch({type:"add",data:e.target.value})
        }} />

      </div>


      </div>
  );
};

function mapStateToProps(state) {
  const counter = state.counter;
  return {
    counter
  };
}

//export default connect(mapStateToProps)(Counter);

//export default Counter;

