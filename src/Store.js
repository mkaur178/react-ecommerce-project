import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, productReducer)
const Store=configureStore({
    reducer:{
        addtocart: persistedReducer,
        
    }
});

export default Store;
export const persistor = persistStore(Store);

 

 

 