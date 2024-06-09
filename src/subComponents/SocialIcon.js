import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';
import styled from 'styled-components';
import { darkTheme } from '../components/Themes';

const Icons = styled.div`
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

const Line = styled.span`
	width: 2px;
	height: 8rem;
	background-color: ${(props) =>
		props.color === 'dark' ? darkTheme.text : darkTheme.body};
`;

const SocialIcon = (props) => {
	return (
		<Icons>
			<div>
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
			</div>
			<div>
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
			</div>
			<div>
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
			</div>
			<div>
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
			</div>
			<Line color={props.theme} />
		</Icons>
	);
};

export default SocialIcon;
