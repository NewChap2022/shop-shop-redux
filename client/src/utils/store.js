import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducers';

const preloadedState = {   
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
}
export const store = configureStore({
    reducer,
    preloadedState
})
