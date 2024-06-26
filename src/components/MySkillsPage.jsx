import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Design, Develope } from './AllSvgs';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import PowerButton from '../subComponents/powerButton';
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	cursor: pointer;
	line-height: 1.5;
	font-family: 'Ubuntu Mono', monospace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	&:hover {
		color: ${(props) => props.theme.body};
		background-color: ${(props) => props.theme.text};
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(1em + 1vw);
	${Main}:hover & {
		& > * {
			fill: ${(props) => props.theme.body};
		}
	}
	& > *:first-child {
		margin-right: 1rem;
	}
`;

const Description = styled.div`
	color: ${(props) => props.theme.text};
	font-size: calc(0.4rem + 1vw);
	padding: 0.5rem 0;
	strong {
		margin-bottom: 1rem;
		text-transform: uppercase;
	}
	ul,
	p {
		margin-left: 2rem;
	}
	${Main}:hover & {
		color: ${(props) => props.theme.body};
	}
`;

const MySkillsPage = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Box>
				<LogoComponent theme="light" />
				<PowerButton />
				<SocialIcon theme="light" />
				<ParticleComponent theme="light" />
				<Main>
					<Title>
						<Design width={40} height={40} /> Designer
					</Title>
					<Description>
						I love to create design which speaks, Keep it clean, minimal and
						simple.
					</Description>
					<Description>
						<strong>I LIKE TO DESIGN</strong>
						<ul>
							<li>Web Design</li>
							<li>Mobile Apps</li>
						</ul>
					</Description>
					<Description>
						<strong>Tools</strong>
						<ul>
							<li>Figma</li>
						</ul>
					</Description>
				</Main>
				<Main>
					<Title>
						<Develope width={40} height={40} /> Frontend Developer
					</Title>
					<Description>
						I value business or brand for which i'm creating, thus i enjoy
						bringing new ideas to life.
					</Description>
					<Description>
						<strong>SKILLS</strong>
						<p>
							Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
							etc.
						</p>
					</Description>
					<Description>
						<strong>Tools</strong>
						<p>VScode, Github, Codepen etc.</p>
					</Description>
				</Main>
			</Box>
		</ThemeProvider>
	);
};

export default MySkillsPage;
