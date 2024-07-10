import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../components/Themes';
import { motion } from 'framer-motion';

const Logo = styled(motion.h1)`
	display: inline-block;
	color: ${(props) =>
		props.color === 'dark' ? darkTheme.text : darkTheme.body};
	font-family: 'Pacifico', cursive;

	position: fixed;
	left: 2rem;
	top: 2rem;
	z-index: 3;
`;

const Item = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};

const LogoComponent = (props) => {
	return (
		<Logo color={props.theme} variants={Item} initial="hidden" animate="show">
			Shun
		</Logo>
	);
};

export default LogoComponent;
