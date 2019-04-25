import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from './index';
import "./Components/Loader/Loader.css";

storiesOf('Loader')
	.add('With show false', () => <Loader show={false} />)
	.add('Loader default design, filling default true', () => (<Loader show={true} />))
	.add('Default 1, filling false', () => <Loader show={true} fillIn={false} design={1} />)
	.add('Default 1, filling true', () => <Loader show={true} fillIn={true} design={1} />)
	.add('Design 2, filling true', () => <Loader show={true} fillIn={true} design={2} />)
	.add('Design 2, filling false', () => <Loader show={true} fillIn={false} design={2} />)
	.add('Design 3, filling true', () => <Loader show={true} fillIn={true} design={3} />)
	.add('Design 3, filling false', () => <Loader show={true} fillIn={false} design={3} />)
	.add('left border color prop #516077', () => <Loader show={true} fillIn={false} design={1} leftBorder={"#516077"} />)
	.add('right border color prop #b212b7', () => <Loader show={true} fillIn={false} design={2} rightBorder={"#b212b7"} />)
	.add('Center border color prop #603135', () => <Loader show={true} fillIn={false} design={3} centerBorder={"#603135"} />);
