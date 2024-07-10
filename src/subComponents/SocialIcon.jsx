import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';
import styled from 'styled-components';
import { darkTheme } from '../components/Themes';
import { motion } from 'framer-motion';

const Icons = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: calc(1rem + 2vw);
	z-index: 3;
	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const Line = styled(motion.span)`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === 'dark' ? darkTheme.text : darkTheme.body};
`;

//Config
const Item = {
	hidden: {
		scale: 0,
	},
	show: {
		scale: 1,
		transition: {
			type: 'spring',
			duration: 0.5,
			damping: 5,
			delay: 1,
		},
	},
};

const SocialIcon = (props) => {
	return (
		<Icons>
			<motion.div variants={Item} initial="hidden" animate="show">
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<Github
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					></Github>
				</NavLink>
			</motion.div>
			<motion.div variants={Item} initial="hidden" animate="show">
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<Twitter
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					></Twitter>
				</NavLink>
			</motion.div>
			<motion.div variants={Item} initial="hidden" animate="show">
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<Facebook
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					></Facebook>
				</NavLink>
			</motion.div>
			<motion.div variants={Item} initial="hidden" animate="show">
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<YouTube
						width={25}
						height={25}
						fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
					></YouTube>
				</NavLink>
			</motion.div>
			<Line
				color={props.theme}
				initial={{ y: 200 }}
				animate={{ y: 0 }}
				transition={{
					type: 'spring',
					duration: 1,
					delay: 1,
				}}
			/>
		</Icons>
	);
};

export default SocialIcon;
