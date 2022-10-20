import { createSlice , configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice ({
   name:'auth',
   initialState:{
    user : null ,
    isloggedin: false
   },
   reducers:{
    signin: (state , action) => {
        state.isloggedin = true;
    },
    signup() {},
    signout : (state) => {
        state.isloggedin = false;
    }
   }

})

const orderSlice = createSlice ({
    name:'order',
    initialState:{
     items : [] ,
    },
    reducers:{
     additem: (state , action) => {
         state.items.push({amount:1, price:action.payload.price,name:action.payload.name})
     },
     
     removeItem : (state , action) => {
         state.isloggedin = false;
     }
    }
 
 })
 
const store = configureStore ({
    reducer: {auth:authSlice.reducer , order:orderSlice.reducer }
})

export const {signin ,signup , signout } = authSlice.actions;
export const {additem ,removeItem } = orderSlice.actions;

export default store;