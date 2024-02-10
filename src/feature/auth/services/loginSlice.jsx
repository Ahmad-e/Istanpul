import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
        'login',
        async (payload) => {
                try {
                        const response = await axios.post('http://127.0.0.1:3001/login', payload);
                        console.log('User response Login:', response.data);

                        return response.data;
                } catch (e) {
                        throw e;
                }
        }
);

const loginSlice = createSlice({
        name: 'login',
        initialState: {
                isLoading: false,
                error: " error in login operation",
                successMessage: "لقد تمت عملية الولوج إلى النظام بنجاح",
                token: '',
                publicKey: ''
        },
        reducers: {},
        extraReducers: (builder) => {
                builder
                        .addCase(login.pending, (state) => {
                                state.isLoading = true;
                                state.error = null;
                                state.successMessage = null;
                                state.token = null;
                                state.publicKey = null;
                        })
                        .addCase(login.fulfilled, (state, action) => {
                                state.isLoading = false;
                                state.successMessage = action.payload.message || state.successMessage;
                                state.token = action.payload.token || state.token;
                                state.publicKey = action.payload.publicKey || state.publicKey;
                        })
                        .addCase(login.rejected, (state, action) => {
                                state.isLoading = false;
                                state.error = action.error.message;
                                state.successMessage = null;
                                state.token = null;
                                state.publicKey = null;
                        });
        },
});

export default loginSlice.reducer;
