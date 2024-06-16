import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styled from 'styled-components';

//Particle config
import ConfigDark from '../config/particlesjs-config.json';
import ConfigLight from '../config/particlesjs-config-light.json';

const Box = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 0;
`;

const ParticleComponent = (props) => {
	const particlesInit = async (main) => {
		await loadFull(main);
	};
	return (
		<Box>
			<Particles
				id="tsparticles"
				style={{ position: 'absolute', top: 0 }}
				params={props.theme === 'light' ? ConfigLight : ConfigDark}
				init={particlesInit}
			/>
		</Box>
	);
};

export default ParticleComponent;
