import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducers from '../features/userSlide/userSlide'
import quantityReducers from '../features/quantitySlide/quantitySlide'
import productReducers from '../features/productSlide/productSlide'
import wishlistReducers from '../features/wishlistSlide/wishlistSlide'
import cartReducers from '../features/cartSlide/cartSlide'
import historyReducers from '../features/historySlide/historySlide'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
    user: userReducers,
    quantity: quantityReducers,
    wishlist:wishlistReducers,
    product:productReducers,
    cart:cartReducers,
    history:historyReducers
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store)