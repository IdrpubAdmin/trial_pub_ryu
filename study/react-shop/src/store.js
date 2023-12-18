import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: 'user',
  initialState:{name:'Ryu', age:20},
  reducers:{
    editName(state){
      state.name='Park'
    },
    editAge(state){
      state.age=state.age+1
    }
  }
})
export let {editName, editAge} = user.actions

let stock = createSlice({
  name: 'stock',
  initialState:[20, 21, 22]
})

let cartData = createSlice({
  name:'cartData',
  initialState: [
    {id:0, name:'White and Black', count: 2},
    {id:2, name:'Grey Yordan', count: 1}
  ]
})
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cartData: cartData.reducer
  }
})
