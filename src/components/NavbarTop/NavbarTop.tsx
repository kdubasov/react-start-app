// import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import LangDropdown from "./components/LangDropdown/LangDropdown.tsx";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch.tsx";
import "./NavbarTop.css";

const NavbarTop = () => {

	return (
		<Navbar className={"NavbarTop"}>
			<Container>
				<h5 className={'m-0'}>Navbar</h5>
				<Nav className="align-items-center">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
					<LangDropdown />
					<ThemeSwitch />
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarTop;
