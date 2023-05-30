import {createSlice} from "@reduxjs/toolkit";

interface ITheme {
	theme: 'dark' | 'light',
}
const initialState: ITheme = {
	theme: 'light',
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		switchTheme: (state) => {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
		}
	}
})



export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;
