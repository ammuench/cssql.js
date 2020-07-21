import { expect } from 'chai';
import * as sinon from 'sinon';

import { AMMuenchTSApp } from '../src/index';

let classInstance: AMMuenchTSApp;

describe('AMMuenchTSApp', () => {
	beforeEach(() => {
		classInstance = new AMMuenchTSApp();
	});

	it('should create a new class without errors', () => {
		expect(classInstance).to.exist;
	});

	describe('AMMuenchTSApp.helloworld method', () => {
		it(`Should return '🦈   Hello World, I am a typescript app'`, () => {
			expect(classInstance.helloWorld()).to.equal(
				'🦈   Hello World, I am a typescript app',
			);
		});
	});
});
