import { createSlice } from "@reduxjs/toolkit";
const initialState={
    
}
const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        increment : ()=>{},
        decrement : ()=>{},
        incrementByThree : ()=>{},
        reset : ()=>{},
        setTitle : ()=>{}
    }
})

export const {increment,decrement,incrementByThree,reset,setTitle} = userSlice.actions
export default userSlice.reducer;