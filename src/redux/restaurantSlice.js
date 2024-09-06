import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Api call or asynchronous operation call using thunk
// first argument is name of slice + / + name of thunk function
// also using promise
export const fetchRestaurant = createAsyncThunk("restaurantSlice/fetchRestaurant", () => {
    const result = axios.get('/restaurant.json').then(response => response.data);
    console.log("response from thunk");
    console.log(result);
    return result;
})

const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState: {
        loading: false, //pending state that means, Api call in progress
        allRestaurant: [], //resolve stage
        error: "" //rejected state-return error
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurant = action.payload;
            state.searchRestuarant = action.payload;
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false
            state.allRestaurant = []
            state.error = action.error.message
        })
    },
    reducers:{
        searchRestuarant:(state, action)=>{
            state.allRestaurant.restaurants=state.searchRestuarant?.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export default restaurantSlice.reducer;
export const {searchRestuarant} =restaurantSlice.actions;

// redux is a synchroronous operation
// but api call or file read or write, etc are asyncronous operation
// to deal with asymchronous operation in redux, we are using redux thunk
// thunk is not a part of slice
// separate method in redux toolkit