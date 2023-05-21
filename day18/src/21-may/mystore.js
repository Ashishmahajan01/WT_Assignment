
import { configureStore } from '@reduxjs/toolkit'


const counterReducer = (state={counter:0,mylist:[]},action)=>{

    console.log("here..")
    if(action.type==="increment")
    {     
        return {...state ,counter : state.counter+1 };
    }
    if(action.type==="decrement")
    {
        
        return { ...state,counter: state.counter -1};
    }
    if(action.type === "add")
    {
        let temp = [...state.mylist]
        temp.push(action.data)
        return {...state,mylist:temp}
    }
    return {counter:0,mylist:[]}
} 


    const store = configureStore({
    reducer:counterReducer,
  })

export default store;

/*
console.log(store.getState())
console.log(store.dispatch({type:"increment"}))
console.log(store.getState())
store.dispatch({type:"increment"})
store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})
console.log(store.getState())
*/

