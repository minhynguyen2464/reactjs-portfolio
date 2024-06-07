import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs';
import styled from 'styled-components';

const Icons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 2rem;
	z-index: 3;
	& > *:not(:last-child) {
		margin: 0.5rem 0;
	}
`;

const Line = styled.span`
	width: 2px;
	height: 8rem;
	background-color: ${(props) => props.theme.text};
`;

const SocialIcon = () => {
	return (
		<Icons>
			<div>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<Github width={25} height={25} fill="currentColor"></Github>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<Twitter width={25} height={25} fill="currentColor"></Twitter>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<Facebook width={25} height={25} fill="currentColor"></Facebook>
				</NavLink>
			</div>
			<div>
				<NavLink
					style={{ color: 'inherit' }}
					target="_blank"
					to="https://github.com/minhynguyen2464"
				>
					<YouTube width={25} height={25} fill="currentColor"></YouTube>
				</NavLink>
			</div>
			<Line />
		</Icons>
	);
};

export default SocialIcon;
