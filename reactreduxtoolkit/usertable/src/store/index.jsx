import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/UserSlice';

const store = configureStore({
	reducer: {
		//if multiple slices, it acts as a combined reducer
		users: userSlice,
	},
});

export default store;
