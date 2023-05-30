import {useAppSelector} from "../store/store.ts";

export const useTheme = () => {
	return useAppSelector(state => state.theme.theme);
}
