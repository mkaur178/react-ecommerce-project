import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[],
}

const ProductSlice= createSlice({
    name:"addtocart",
    initialState:initialState,
    reducers:{
        addData:(state,action)=>{
            var myitem=state.cart.filter((key)=>key.id==action.payload.id);

            if(myitem.length>=1)
            {
                alert("This Product already added")
            }
            else{
                state.cart.push(action.payload)
            }
        }
        ,
        proQtyInc:(state,action)=>{
            for(var i=0;i<state.cart.length;i++)
            {
                if(state.cart[i].id==action.payload)
                {
                    state.cart[i].quantity++;
                }
            }
        },
        proQtyDec:(state,action)=>{
            for(var i=0; i<state.cart.length;i++)
            {
                if(state.cart[i].id==action.payload)
                {
                    if(state.cart[i].quantity>1)
                    {
                        state.cart[i].quantity--;
                    }
                    else{
                        alert("Your Product quantity atleast 1")
                    }
                }
            }
         },
         cartProductRemove:(state,action)=>{
            state.cart=state.cart.filter(item=>item.id!=action.payload)
         }
         ,
         cartempty:(state)=>{
            state.cart = [];

         }









    }
      
})

export const {addData,proQtyDec,proQtyInc,cartProductRemove,cartempty}= ProductSlice.actions;
export default ProductSlice.reducer;