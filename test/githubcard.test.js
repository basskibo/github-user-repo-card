import React from "react";
import ReactDOM from "react-dom";
import { GithubCard } from "../dist/github_card"

import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup)

describe('Component should render', () => {
    it('Text in state is changed when username is passed', () => {
        const { getByText } = render(<GithubCard name="basskibo" type="profile" repository="blog_tech_dev" />);
        console.log(getByText)
        expect(getByText(/Initial/i).textContent).toBe(true)

        fireEvent.click(getByText("State Change Button"))

        expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
    })

})