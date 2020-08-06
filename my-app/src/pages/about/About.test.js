import React from 'react'
import renderer from 'react-test-renderer'
import About from './About'
import TestingEnvironment from "../../utils/testWrapper"

describe('About Page',() => {
    it('should render About page',() => {
        const tree = renderer.create(
            <TestingEnvironment>
                <About/>
            </TestingEnvironment>
        ).toJSON();
        expect(tree).toMatchSnapshot()
    })
})