import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {replaceCamelWithSpace} from "./utils/util";

test('button has correct initial color', () => {
    render(<App/>);
    const btn = screen.getByRole('button', {name: "Change to blue"});
    expect(btn).toHaveStyle({backgroundColor: 'red'});
});


test('button turns blue when clicked', () => {
    render(<App/>);
    const btn = screen.getByRole('button', {name: "Change to blue"});
    fireEvent.click(btn);
    expect(btn).toHaveStyle({backgroundColor: 'blue'});
});

test('button text Modified to \'changed to Red\' when clicked', () => {
    render(<App/>);
    const btn = screen.getByRole('button', {name: "Change to blue"});
    fireEvent.click(btn);
    expect(btn.textContent).toBe('Change to Red');
});

test('initial conditions', () => {
    render(<App/>);
    const btn = screen.getByRole('button', {name: 'Change to blue'});
    expect(btn).toBeEnabled();

    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();
});

test('checkbox disables button on First click and enables on second click', () => {
    render(<App/>);
    const checkbox = screen.getByRole('checkbox', {name: "Disable button"});
    const btn = screen.getByRole('button');

    fireEvent.click(checkbox);
    expect(btn).toBeDisabled();

    fireEvent.click(checkbox);
    expect(btn).toBeEnabled();
});

describe('space before camel-case capital letters', () => {

    test('works for no inner capital letters', () => {
        expect(replaceCamelWithSpace('Mohammad')).toBe('Mohammad');
    });

    test('works for one inner capital letter', () => {
        expect(replaceCamelWithSpace('MohammadHossein')).toBe('Mohammad Hossein');
    });

    test('works for multiple inner capital letter', () => {
        expect(replaceCamelWithSpace('MohammadHosseinNejadhendi')).toBe('Mohammad Hossein Nejadhendi');
    });
});