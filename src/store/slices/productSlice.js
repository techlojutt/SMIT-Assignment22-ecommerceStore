import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log('data in fetch product', data);
        
        return data;
    }
)


const productSlice = createSlice({
    name:'product',
    initialState:{
        products:[],
    },

    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload
        }
    },

    extraReducers: builder => {
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            console.log("fetch  products in reducer",action.payload);
            state.products = action.payload;
        })
    }

       
})

export const {setProducts} = productSlice.actions

export default productSlice.reducer