import "./ThemeLayout.css";
import {useTheme} from "../../hooks/useTheme.ts";
import React, {ReactNode} from "react";

interface IThemeLayout {
	children: ReactNode
}

const ThemeLayout: React.FC<IThemeLayout> = ({ children }) => {

	const theme = useTheme();

	return (
		<div className={'ThemeLayout ' + theme}>
			{children}
		</div>
	);
};

export default ThemeLayout;
