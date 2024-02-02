import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signUpService = createAsyncThunk(
        'api/register',
        async (payload) => {
                try {
                        console.log("Payload:", payload);
                        const response = await axios.post('https://rest.istanbulru.com/api/register', payload);
                        console.log('User response Register:', response);

                        return response;
                } catch (e) {
                        throw e;
                }
        }
);

const signUpSlice = createSlice({
        name: 'signUpService',
        initialState: {
                isLoading: false,
                error: " error in signUpService operation",


        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(signUpService.pending, (state) => {
                                state.isLoading = true;
                                state.error = null;

                        })
                        .addCase(signUpService.fulfilled, (state, action) => {
                                state.isLoading = false;

                        })
                        .addCase(signUpService.rejected, (state, action) => {
                                state.isLoading = false;
                                state.error = action.error.message;
                                console.error('Error in signUpService:', action.error.message);

                                if (action.payload) {
                                        console.log('Full Response:', action.payload);
                                }
                        });


        },
});

export default signUpSlice.reducer;
