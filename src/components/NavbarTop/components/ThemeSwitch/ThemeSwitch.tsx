import { Form } from "react-bootstrap";
import {useTheme} from "../../../../hooks/useTheme.ts";
import {useAppDispatch} from "../../../../store/store.ts";
import {switchTheme} from "../../../../store/slices/themeSlice.ts";

const ThemeSwitch = () => {

	const theme = useTheme();
	const dispatch = useAppDispatch();

	return (
		<Form.Check
			type="switch"
			label="Dark theme"
			checked={theme === "dark"}
			onChange={() => dispatch(switchTheme())}
		/>
	);
};

export default ThemeSwitch;
