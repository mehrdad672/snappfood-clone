import { createSlice , configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice ({
   name:'auth',
   initialState:{
    
   },
   reducers:{
    signin() {},
    signup() {},
    signout(){}
   }

})

const store = configureStore ({
    reducer:
})